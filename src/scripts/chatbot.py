import sys
import json
import difflib

def load_data(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

RESPONSES = {
    "en": {
        "email": "You can reach Mateus at {email}.",
        "linkedin": "Connect on LinkedIn: {linkedin}",
        "github": "Check out code on GitHub: {github}",
        "who": "I am a bot assisting {name}, a {role}.",
        "skills": "Key skills include: {core}. Also experienced in {frontline}.",
        "project_found": "**{name}**: {desc} (Stack: {tech})",
        "about_fallback": " ",
        "unknown": "I confirm I received your query, but my databanks are limited. Try asking about 'projects', 'skills', or 'email'."
    },
    "pt": {
        "email": "Você pode contatar Mateus em {email}.",
        "linkedin": "Conecte-se no LinkedIn: {linkedin}",
        "github": "Veja o código no GitHub: {github}",
        "who": "Sou um bot assistindo {name}, um {role}.",
        "skills": "Habilidades principais incluem: {core}. Também experiente em {frontline}.",
        "project_found": "**{name}**: {desc} (Stack: {tech})",
        "about_fallback": " ",
        "unknown": "Confirmo o recebimento da sua consulta, mas meu banco de dados é limitado. Tente perguntar sobre 'projetos', 'habilidades' ou 'email'."
    },
    "es": {
        "email": "Puedes contactar a Mateus en {email}.",
        "linkedin": "Conéctate en LinkedIn: {linkedin}",
        "github": "Mira el código en GitHub: {github}",
        "who": "Soy un bot asistiendo a {name}, un {role}.",
        "skills": "Habilidades principales incluyen: {core}. También con experiencia en {frontline}.",
        "project_found": "**{name}**: {desc} (Stack: {tech})",
        "about_fallback": " ",
        "unknown": "Confirmo la recepción de su consulta, pero mis bases de datos son limitadas. Intente preguntar sobre 'proyectos', 'habilidades' o 'email'."
    }
}

def find_answer(query, all_data, lang="en"):
    query = query.lower()
    
    # Fallback to English if lang not supported, but UI restricts to en/pt/es
    lang_data = all_data.get(lang, all_data["en"])
    responses = RESPONSES.get(lang, RESPONSES["en"])

    # 1. Check direct profile info
    if "email" in query or "contact" in query or "contato" in query or "correo" in query:
        return responses["email"].format(email=lang_data['profile']['email'])
        
    if "linkedin" in query:
        return responses["linkedin"].format(linkedin=lang_data['profile']['linkedin'])
        
    if "github" in query or "git" in query:
        return responses["github"].format(github=lang_data['profile']['github'])
        
    if "name" in query or "who" in query or "quem" in query or "nombre" in query or "quien" in query:
        return responses["who"].format(name=lang_data['profile']['name'], role=lang_data['profile']['role'])
    
    # 2. Check skills
    if "skill" in query or "tech" in query or "stack" in query or "habilidade" in query or "tecnologia" in query:
        core = ", ".join(lang_data['skills']['core'])
        frontline = ", ".join(lang_data['skills']['frontline'])
        return responses["skills"].format(core=core, frontline=frontline)
    
    # 3. Check Projects (fuzzy match)
    project_names = [p['name'] for p in lang_data['projects']]
    best_match = difflib.get_close_matches(query, project_names, n=1, cutoff=0.4)
    
    if best_match:
        proj = next(p for p in lang_data['projects'] if p['name'] == best_match[0])
        return responses["project_found"].format(name=proj['name'], desc=proj['description'], tech=proj['tech'])
        
    # 4. Keyword search in projects
    for p in lang_data['projects']:
        if query in p['name'].lower() or query in p['description'].lower():
             return responses["project_found"].format(name=p['name'], desc=p['description'], tech=p['tech'])

    # 5. Fallback About
    if "about" in query or "background" in query or "sobre" in query or "historia" in query:
        return responses["about_fallback"].join(lang_data['about'])

    return responses["unknown"]

if __name__ == "__main__":
    try:
        if len(sys.argv) < 3:
            print(json.dumps({"text": "System Error: Missing arguments."}))
            sys.exit(1)
            
        user_message = sys.argv[1]
        data_path = sys.argv[2]
        
        # Checking for optional language argument
        lang = "en"
        if len(sys.argv) > 3:
            lang = sys.argv[3]
        
        data = load_data(data_path)
        answer = find_answer(user_message, data, lang)
        
        print(json.dumps({"text": answer}))
    except Exception as e:
        print(json.dumps({"text": f"Error processing request: {str(e)}"}))

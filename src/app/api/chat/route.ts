import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: NextRequest) {
    try {
        const { message, language } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message required' }, { status: 400 });
        }

        // Path to python script
        const scriptPath = path.resolve(process.cwd(), 'src/scripts/chatbot.py');
        const dataPath = path.resolve(process.cwd(), 'src/data/portfolio.json');

        const response = await new Promise<NextResponse>((resolve) => {
            // Pass language as 3rd argument to python script
            const pythonProcess = spawn('python', [scriptPath, message, dataPath, language || 'en']);

            let dataString = '';
            let errorString = '';

            pythonProcess.stdout.on('data', (data) => {
                dataString += data.toString();
            });

            pythonProcess.stderr.on('data', (data) => {
                errorString += data.toString();
            });

            pythonProcess.on('close', (code) => {
                if (code !== 0) {
                    console.error(`Python script exited with code ${code}: ${errorString}`);
                    resolve(NextResponse.json({ error: 'Chatbot processing failed' }, { status: 500 }));
                } else {
                    try {
                        // Expecting JSON output from python script
                        const jsonResponse = JSON.parse(dataString);
                        resolve(NextResponse.json(jsonResponse));
                    } catch (e) {
                        console.error("Failed to parse python response", dataString);
                        resolve(NextResponse.json({ text: dataString.trim() }));
                    }
                }
            });
        });

        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

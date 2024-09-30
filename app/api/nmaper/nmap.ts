const { exec } = require('child_process');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { target } = req.body;

    exec(`nmap -A ${target}`, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ result: `Error: ${stderr}` });
      } else {
        res.status(200).json({ result: stdout });
      }
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

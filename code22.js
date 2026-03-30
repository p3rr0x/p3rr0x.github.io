const { exec } require('child_process');
exec('powershell -Command "Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show(\'Message Body\', \'Title\')"');
exec('calc');

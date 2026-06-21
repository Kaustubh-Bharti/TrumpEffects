using System;
using System.Diagnostics;
using System.IO;

class Program
{
    static void Main()
    {
        string baseDir = AppDomain.CurrentDomain.BaseDirectory.TrimEnd('\\');

        string exeFile = Path.Combine(baseDir, "systempulse.exe");
        string htmlFile = Path.Combine(baseDir, "controversy-rankings.html");

        Process.Start(new ProcessStartInfo
        {
            FileName = exeFile,
            UseShellExecute = true
        });

        Process.Start(new ProcessStartInfo
        {
            FileName = htmlFile,
            UseShellExecute = true
        });
    }
}
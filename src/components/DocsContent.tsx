import React from 'react';

const DocsContent = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>Basic Linux Commands</h2>
      <p>The Linux command line, also known as the terminal or shell, is a text-based interface for interacting with your computer. It provides a powerful and efficient way to manage files, run programs, and configure your system. This tutorial covers some fundamental commands to get you started.</p>

      <h3>Opening the Terminal</h3>
      <p>On most Linux distributions (like Ubuntu), you can open the terminal by pressing <code>Ctrl+Alt+T</code> or by searching for "Terminal" in your applications menu.</p>

      <h3>Basic Navigation</h3>
      <ul>
        <li><strong><code>pwd</code> (Print Working Directory):</strong> Displays the full path of your current location in the file system.</li>
        <li><strong><code>ls</code> (List Directory Contents):</strong> Use <code>ls</code> to see the files and directories within your current working directory.</li>
        <li><strong><code>cd</code> (Change Directory):</strong> This command allows you to navigate between directories.</li>
      </ul>

      <h3>File and Directory Management</h3>
      <ul>
        <li><strong><code>mkdir</code> (Make Directory):</strong> Creates a new directory (folder).</li>
        <li><strong><code>touch</code> (Create Empty File):</strong> Creates a new, empty file.</li>
        <li><strong><code>cp</code> (Copy Files or Directories):</strong> Copies files or directories from one location to another.</li>
        <li><strong><code>mv</code> (Move or Rename Files or Directories):</strong> Moves or renames files or directories.</li>
        <li><strong><code>rm</code> (Remove Files or Directories):</strong> Deletes files or directories.</li>
        <li><strong><code>rmdir</code> (Remove Directory):</strong> Deletes an empty directory.</li>
      </ul>

      <h3>Viewing File Content</h3>
      <ul>
        <li><strong><code>cat</code> (Concatenate and Display File Contents):</strong> Displays the entire content of a file to the terminal.</li>
      </ul>

      <h3>Getting Help</h3>
      <ul>
        <li><strong><code>man</code> (Manual Pages):</strong> Provides a manual page for most commands.</li>
        <li><strong><code>--help</code> flag:</strong> Many commands offer a concise help message.</li>
      </ul>

      <h3>System Information</h3>
      <ul>
        <li><strong><code>uname</code> (Unix Name):</strong> Displays system information.</li>
      </ul>
    </div>
  );
};

export default DocsContent;

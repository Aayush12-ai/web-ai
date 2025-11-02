import React from 'react';

const FileSystemDocs = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>Linux File System</h2>
      <p>The Linux file system is a fundamental concept for anyone starting with Linux. Unlike Windows, which uses drive letters (C:, D:), Linux organizes all files and directories under a single, unified hierarchy starting from the root directory, represented by a forward slash (<code>/</code>). This structure is governed by the Filesystem Hierarchy Standard (FHS).</p>

      <h3>The Root Directory (<code>/</code>)</h3>
      <p>The root directory is the top-level directory in the Linux file system. Every other file and directory branches off from this point.</p>

      <h3>Key Directories and Their Purposes</h3>
      <ul>
        <li><strong><code>/</code> (Root):</strong> The primary hierarchy root of the entire file system.</li>
        <li><strong><code>/bin</code>:</strong> Contains essential user executable programs.</li>
        <li><strong><code>/boot</code>:</strong> Stores files required to boot the Linux operating system.</li>
        <li><strong><code>/dev</code>:</strong> Contains device files.</li>
        <li><strong><code>/etc</code>:</strong> Holds system-wide configuration files.</li>
        <li><strong><code>/home</code>:</strong> Contains the personal directories for regular users.</li>
        <li><strong><code>/lib</code>:</strong> Stores essential shared libraries.</li>
        <li><strong><code>/media</code>:</strong> Provides temporary mount points for removable media.</li>
        <li><strong><code>/mnt</code>:</strong> A directory where system administrators can temporarily mount file systems.</li>
        <li><strong><code>/opt</code>:</strong> Used for optional application software packages.</li>
        <li><strong><code>/proc</code>:</strong> A virtual file system that provides information about running processes.</li>
        <li><strong><code>/root</code>:</strong> The home directory for the root user.</li>
        <li><strong><code>/sbin</code>:</strong> Contains essential system binaries.</li>
        <li><strong><code>/tmp</code>:</strong> Stores temporary files.</li>
        <li><strong><code>/usr</code>:</strong> Contains user applications, libraries, and documentation.</li>
        <li><strong><code>/var</code>:</strong> Holds variable data files, such as log files.</li>
      </ul>

      <h3>Basic File System Navigation Commands</h3>
      <ul>
        <li><strong><code>pwd</code>:</strong> Displays the full path of your current location.</li>
        <li><strong><code>ls</code>:</strong> Lists the contents of the current directory.</li>
        <li><strong><code>cd</code>:</strong> Used to move between directories.</li>
        <li><strong><code>mkdir</code>:</strong> Creates a new directory.</li>
        <li><strong><code>rmdir</code>:</strong> Deletes an empty directory.</li>
        <li><strong><code>cp</code>:</strong> Copies files or directories.</li>
        <li><strong><code>mv</code>:</strong> Moves or renames files and directories.</li>
        <li><strong><code>rm</code>:</strong> Deletes files or directories.</li>
      </ul>
    </div>
  );
};

export default FileSystemDocs;

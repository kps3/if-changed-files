const { getChangedFilesForRoots } = require('jest-changed-files');

const ifChangedFiles = async (root) => {
  const files = await getChangedFilesForRoots([root]);
  return files && files.changedFiles.size > 0;
};

module.exports = ifChangedFiles;


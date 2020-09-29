module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "minor" },

          { type: "fix", release: "patch" },
          { type: "revert", release: "patch" },

          { type: "refactor", release: "patch" },
          { type: "perf", release: "patch" },

          { type: "build", release: "patch" },
          { type: "chore", release: "patch" },
          { type: "ci", release: "patch" },

          { type: "docs", release: false },
          { type: "test", release: false },
          { type: "style", release: false },
          { scope: "no-release", release: false },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        // Name of the release notes generator package - If you're using this package in your config, it should be:
        // config: "@regalstreak/conventional-release-notes",
        config: ".",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};

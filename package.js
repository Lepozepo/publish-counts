Package.describe({
  name: "lepozepo:publish-counts",
  summary: "Publish the count of a cursor, in real time",
  version: "0.3.5",
  git: "https://github.com/percolatestudio/publish-counts.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.2");
  api.use(['blaze', 'mongo'], 'client');
  api.add_files('publish-counts.js');
  api.export('Counts');
  api.export('publishCount', 'server');
});

Package.on_test(function (api) {
  api.use([
    'tmeasday:publish-counts',
    'tinytest',
    'facts']);

  api.add_files('publish-counts_tests.js');
});

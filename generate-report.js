const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports', // Folder containing JSON report
  reportPath: 'reports/html', // Folder where HTML will be generated
  metadata: {
    browser: {
      name: 'chrome',
      version: '128',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '11',
    },
  },
  customData: {
    title: 'Project Info',
    data: [
      { label: 'Project', value: 'Cucumber + Playwright Example' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
    ],
  },
});

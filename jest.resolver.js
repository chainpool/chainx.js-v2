// Copyright 2017-2020 @chainx-v2/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const path = require('path');

module.exports = function resolver (file, config) {
  if (file.includes('package.json')) {
    return path.join(config.basedir.replace('/src', '/'), file);
  }

  return config.defaultResolver(file, config);
};

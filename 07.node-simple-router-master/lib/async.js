// Generated by CoffeeScript 1.10.0
(function() {
  var _argumentsToArray, async, defaultFinalCb, fs, pad, readDir, thousand_sep;

  _argumentsToArray = function() {
    var arg, i, len1, ret;
    ret = [];
    for (i = 0, len1 = arguments.length; i < len1; i++) {
      arg = arguments[i];
      ret.push(arg);
    }
    return ret;
  };

  async = {};

  defaultFinalCb = function(err, result) {
    if (arguments.length === 1) {
      result = err;
      err = null;
    }
    if (err) {
      return err;
    } else {
      return result;
    }
  };

  async.some = function(arr, asyncFunc, finalCb) {
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    if (arr.length === 0) {
      return finalCb(false);
    } else {
      return asyncFunc(arr[0], function(err, resp) {
        if (arguments.length === 1) {
          resp = err;
          err = null;
        }
        if (err) {
          return finalCb(err, null);
        }
        if (!!resp) {
          return finalCb(!!resp);
        } else {
          return async.some(arr.slice(1), asyncFunc, finalCb);
        }
      });
    }
  };

  async.every = function(arr, asyncFunc, finalCb) {
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    if (arr.length === 0) {
      return finalCb(true);
    } else {
      return asyncFunc(arr[0], function(err, resp) {
        if (arguments.length === 1) {
          resp = err;
          err = null;
        }
        if (err) {
          return finalCb(err, null);
        }
        if (!resp) {
          return finalCb(!!resp);
        } else {
          return async.every(arr.slice(1), asyncFunc, finalCb);
        }
      });
    }
  };

  async.map = function(arr, asyncFunc, finalCb, asyncArr) {
    if (asyncArr == null) {
      asyncArr = [];
    }
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    if (arr.length === 0) {
      return finalCb(null, asyncArr);
    } else {
      return asyncFunc(arr[0], function(err, resp) {
        if (arguments.length === 1) {
          resp = err;
          err = null;
        }
        if (err) {
          return finalCb(err, null);
        }
        asyncArr.push(resp);
        return async.map(arr.slice(1), asyncFunc, finalCb, asyncArr);
      });
    }
  };

  async.filter = function(arr, asyncFunc, finalCb, asyncArr) {
    if (asyncArr == null) {
      asyncArr = [];
    }
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    if (arr.length === 0) {
      return finalCb(null, asyncArr);
    } else {
      return asyncFunc(arr[0], function(err, resp) {
        if (arguments.length === 1) {
          resp = err;
          err = null;
        }
        if (err) {
          return finalCb(err, null);
        }
        if (!!resp) {
          asyncArr.push(arr[0]);
        }
        return async.filter(arr.slice(1), asyncFunc, finalCb, asyncArr);
      });
    }
  };

  async.reduce = function(arr, asyncFunc, acum, finalCb) {
    if (acum == null) {
      acum = 0;
    }
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    if (arr.length === 0) {
      return finalCb(null, acum);
    } else {
      return asyncFunc(acum, arr[0], function(err, resp) {
        if (arguments.length === 1) {
          resp = err;
          err = null;
        }
        if (err) {
          return finalCb(err, null);
        }
        acum = resp;
        return async.reduce(arr.slice(1), asyncFunc, acum, finalCb);
      });
    }
  };

  async.waterfall = function(funcArr, finalCb, args) {
    var cb;
    if (args == null) {
      args = null;
    }
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    cb = function(err, args) {
      if (arguments.length === 1) {
        args = err;
        err = null;
      }
      if (err) {
        return finalCb(err, null);
      } else {
        return async.waterfall(funcArr.slice(1), finalCb, args);
      }
    };
    if (funcArr.length === 0) {
      return finalCb(null, args);
    } else {
      return funcArr[0](args, cb);
    }
  };

  async.series = function(funcArr, finalCb, results) {
    var cb;
    if (results == null) {
      results = [];
    }
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    cb = function(err, args) {
      if (arguments.length === 1) {
        args = err;
        err = null;
      }
      if (err) {
        return finalCb(err, results);
      } else {
        results.push(args);
        return async.series(funcArr.slice(1), finalCb, results);
      }
    };
    if (funcArr.length === 0) {
      return finalCb(null, results);
    } else {
      return funcArr[0](cb);
    }
  };

  async.parallel = function(funcArr, finalCb) {
    var completed, fn, i, index, len, len1, make_parallel_cb, results;
    if (!finalCb) {
      finalCb = defaultFinalCb;
    }
    completed = 0;
    len = funcArr.length;
    results = new Array(len);
    make_parallel_cb = function(index) {
      return function(err, args) {
        if (arguments.length === 1) {
          args = err;
          err = null;
        }
        if (err) {
          return finalCb(err, results);
        } else {
          results[index] = args;
          completed += 1;
          if (completed === len) {
            return finalCb(null, results);
          }
        }
      };
    };
    for (index = i = 0, len1 = funcArr.length; i < len1; index = ++i) {
      fn = funcArr[index];
      fn(make_parallel_cb(index));
    }
    return void 0;
  };

  module.exports = async;

  if (!(typeof module !== "undefined" && module !== null ? module.parent : void 0)) {
    thousand_sep = function(num, sep) {
      var resp;
      if (sep == null) {
        sep = ",";
      }
      if (!(num.toString().length > 3)) {
        return num.toString();
      }
      resp = num.toString().split('').reverse().join('').replace(/(\d{3})/g, "$1" + sep).split('').reverse().join('');
      if (resp.charAt(0) === sep) {
        return resp.slice(1);
      } else {
        return resp;
      }
    };
    pad = function(stri, quantity, direction, padchar) {
      var dif, len, n, padstri;
      if (direction == null) {
        direction = "r";
      }
      if (padchar == null) {
        padchar = " ";
      }
      if (stri.constructor.name === "Number") {
        stri = stri.toString();
      }
      len = stri.length;
      dif = quantity - len;
      if (dif <= 0) {
        return stri;
      }
      padstri = ((function() {
        var i, ref, results1;
        results1 = [];
        for (n = i = 1, ref = dif; 1 <= ref ? i <= ref : i >= ref; n = 1 <= ref ? ++i : --i) {
          results1.push(padchar);
        }
        return results1;
      })()).join('');
      if (direction === "r") {
        return "" + stri + padstri;
      } else {
        return "" + padstri + stri;
      }
    };
    fs = require('fs');
    readDir = function(arg, cb) {
      fs.readdir(process.cwd(), function(err, files) {
        if (err) {
          console.log("ERROR reading directory: ");
        } else {
          console.log("Current working directory: " + (process.cwd()) + "\n");
        }
        if (err) {
          return cb(err, null);
        } else {
          return cb(files);
        }
      });
      console.log("Running file system test function");
      return console.log("---------------------------------\n");
    };
    async.waterfall([
      readDir, function(files, cb) {
        var len, stats;
        len = files.length - 1;
        stats = [];
        return files.forEach(function(file, index) {
          return fs.stat(file, function(err, stat) {
            if (err) {
              return cb(err, null);
            }
            stats[index] = stat;
            if (index === len) {
              console.log("Retrieved", stats.length, "items.\n");
              return cb([files, stats]);
            }
          });
        });
      }, function(arrs, cb) {
        var file, fileInfo, fileSizes, files, i, index, j, len1, len2, ref, ref1, ref2, stats;
        files = arrs[0], stats = arrs[1];
        fileSizes = [];
        for (index = i = 0, len1 = files.length; i < len1; index = ++i) {
          file = files[index];
          fileSizes.push({
            name: '' + file + (((ref = stats[index]) != null ? ref.isDirectory() : void 0) ? ' [DIR]' : ''),
            size: (ref1 = stats[index]) != null ? ref1.size : void 0,
            isFile: (ref2 = stats[index]) != null ? ref2.isFile() : void 0
          });
        }
        fileSizes.sort(function(info1, info2) {
          return info1.isFile - info2.isFile;
        });
        for (j = 0, len2 = fileSizes.length; j < len2; j++) {
          fileInfo = fileSizes[j];
          console.log(pad(fileInfo.name, 40), "   ---   ", pad(thousand_sep(fileInfo.size), 40, "l"), "bytes.");
        }
        return cb(fileSizes);
      }
    ], function(err, fileSizes) {
      var info;
      if (err) {
        return console.log("An error happened: " + err.message);
      } else {
        info = "\nTotal Size of files in " + (process.cwd()) + ": ";
        info += (thousand_sep(fileSizes.reduce((function(acum, fileInfo) {
          return acum + (fileInfo.isFile ? fileInfo.size : 0);
        }), 0))) + " bytes.\n";
        return console.log(info);
      }
    });
  }

}).call(this);

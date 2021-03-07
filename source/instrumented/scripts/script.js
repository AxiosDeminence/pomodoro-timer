function cov_22cumzevu3() {
  var path = "D:\\\u5B66\u4E60\\21WI\\CSE110\\cse110-w21-group13\\source\\src\\scripts\\script.js";
  var hash = "02db3c58947b5c83ac5aa574e029ff864d08c65d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u5B66\u4E60\\21WI\\CSE110\\cse110-w21-group13\\source\\src\\scripts\\script.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "1": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "2": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 19
        }
      },
      "3": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 15
        }
      },
      "4": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 61
        }
      },
      "5": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 44
        }
      },
      "6": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 58
        }
      },
      "7": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "8": {
        start: {
          line: 18,
          column: 17
        },
        end: {
          line: 18,
          column: 18
        }
      },
      "9": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 56
        }
      },
      "10": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 45
        }
      },
      "11": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 55
        }
      },
      "12": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 49
        }
      },
      "13": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 44
          },
          end: {
            line: 5,
            column: 45
          }
        },
        loc: {
          start: {
            line: 5,
            column: 50
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }, {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 8
          },
          end: {
            line: 9,
            column: 85
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 8
          },
          end: {
            line: 9,
            column: 46
          }
        }, {
          start: {
            line: 9,
            column: 50
          },
          end: {
            line: 9,
            column: 85
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "02db3c58947b5c83ac5aa574e029ff864d08c65d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22cumzevu3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_22cumzevu3();
cov_22cumzevu3().s[0]++;
// require('../components/TaskItem');
// const TaskItem = require('../components/TaskItem');
window.addEventListener('DOMContentLoaded', () => {
  cov_22cumzevu3().f[0]++;
  let tasks; // holds list nodes in local storage

  let id; // id counter for task items

  cov_22cumzevu3().s[1]++;

  if ((cov_22cumzevu3().b[1][0]++, localStorage.getItem('tasks') === null) || (cov_22cumzevu3().b[1][1]++, localStorage.getItem('id') === null)) {
    cov_22cumzevu3().b[0][0]++;
    cov_22cumzevu3().s[2]++;
    tasks = [];
    cov_22cumzevu3().s[3]++;
    id = 0;
    cov_22cumzevu3().s[4]++;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    cov_22cumzevu3().s[5]++;
    localStorage.setItem('id', `${id}`); // console.log('tasks:',localStorage.getItem('tasks'),'\nid:',localStorage.getItem('id'));
  } else {
    cov_22cumzevu3().b[0][1]++;
    cov_22cumzevu3().s[6]++;
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  cov_22cumzevu3().s[7]++;

  for (let i = (cov_22cumzevu3().s[8]++, 0); i < tasks.length; i++) {
    const task = (cov_22cumzevu3().s[9]++, document.createElement('task-item'));
    cov_22cumzevu3().s[10]++;
    task.setAttribute('id', tasks[i].id);
    cov_22cumzevu3().s[11]++;
    task.setAttribute('checked', tasks[i].checked);
    cov_22cumzevu3().s[12]++;
    task.setAttribute('text', tasks[i].text); // new TaskItem(tasks[i]);

    cov_22cumzevu3().s[13]++;
    document.getElementById('task-list-elements').appendChild(task);
  }
}); // Uncomment below code to clear local storage on refresh -- Useful for debugging
// window.onbeforeunload = function() {
//     // localStorage.removeItem('tasks');
//     localStorage.clear();
//     return '';
// };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGFza3MiLCJpZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiaSIsImxlbmd0aCIsInRhc2siLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwidGV4dCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaO0FBRUE7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsTUFBTTtBQUFBO0FBQzlDLE1BQUlDLEtBQUosQ0FEOEMsQ0FDbkM7O0FBQ1gsTUFBSUMsRUFBSixDQUY4QyxDQUV0Qzs7QUFGc0M7O0FBSTlDLE1BQUksNkJBQUFDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixNQUFrQyxJQUFsQyxrQ0FBMENELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixNQUErQixJQUF6RSxDQUFKLEVBQW1GO0FBQUE7QUFBQTtBQUMvRUgsSUFBQUEsS0FBSyxHQUFHLEVBQVI7QUFEK0U7QUFFL0VDLElBQUFBLEVBQUUsR0FBRyxDQUFMO0FBRitFO0FBRy9FQyxJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixLQUFmLENBQTlCO0FBSCtFO0FBSS9FRSxJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsSUFBckIsRUFBNEIsR0FBRUgsRUFBRyxFQUFqQyxFQUorRSxDQUsvRTtBQUNILEdBTkQsTUFNTztBQUFBO0FBQUE7QUFDSEQsSUFBQUEsS0FBSyxHQUFHSyxJQUFJLENBQUNFLEtBQUwsQ0FBV0wsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBUjtBQUNIOztBQVo2Qzs7QUFhOUMsT0FBSyxJQUFJSyxDQUFDLDZCQUFHLENBQUgsQ0FBVixFQUFnQkEsQ0FBQyxHQUFHUixLQUFLLENBQUNTLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFVBQU1FLElBQUksNkJBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFILENBQVY7QUFEbUM7QUFFbkNGLElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQixJQUFsQixFQUF3QmIsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU1AsRUFBakM7QUFGbUM7QUFHbkNTLElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQixTQUFsQixFQUE2QmIsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU00sT0FBdEM7QUFIbUM7QUFJbkNKLElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQixNQUFsQixFQUEwQmIsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU08sSUFBbkMsRUFKbUMsQ0FLbkM7O0FBTG1DO0FBTW5DSixJQUFBQSxRQUFRLENBQUNLLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDQyxXQUE5QyxDQUEwRFAsSUFBMUQ7QUFDSDtBQUNKLENBckJELEUsQ0FzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UYXNrSXRlbScpO1xyXG5cclxuLy8gY29uc3QgVGFza0l0ZW0gPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1Rhc2tJdGVtJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxldCB0YXNrczsgLy8gaG9sZHMgbGlzdCBub2RlcyBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBsZXQgaWQ7IC8vIGlkIGNvdW50ZXIgZm9yIHRhc2sgaXRlbXNcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJykgPT09IG51bGwpIHtcclxuICAgICAgICB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGlkID0gMDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGAke2lkfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0YXNrczonLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpLCdcXG5pZDonLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFzay1pdGVtJyk7XHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza3NbaV0uaWQpO1xyXG4gICAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdGFza3NbaV0uY2hlY2tlZCk7XHJcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ3RleHQnLCB0YXNrc1tpXS50ZXh0KTtcclxuICAgICAgICAvLyBuZXcgVGFza0l0ZW0odGFza3NbaV0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QtZWxlbWVudHMnKS5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgIH1cclxufSk7XHJcbi8vIFVuY29tbWVudCBiZWxvdyBjb2RlIHRvIGNsZWFyIGxvY2FsIHN0b3JhZ2Ugb24gcmVmcmVzaCAtLSBVc2VmdWwgZm9yIGRlYnVnZ2luZ1xyXG4vLyB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrcycpO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbi8vICAgICByZXR1cm4gJyc7XHJcbi8vIH07XHJcbiJdfQ==
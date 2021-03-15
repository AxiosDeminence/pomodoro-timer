function cov_26ckrmpig() {
  var path = "/Users/efeichen/Documents/Academics/CSE 110/cse110-w21-group13/source/src/scripts/FocusMode.js";
  var hash = "f2fff9f10c65a58017c310e0b96eadbb49b54eab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/efeichen/Documents/Academics/CSE 110/cse110-w21-group13/source/src/scripts/FocusMode.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 3,
          column: 60
        }
      },
      "1": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 60
        }
      },
      "2": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "3": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "4": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 39
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 42
        }
      },
      "6": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "7": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 40
        }
      },
      "8": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "9": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 47
        }
      },
      "10": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 49
        }
      },
      "11": {
        start: {
          line: 18,
          column: 17
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "12": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "toggleState",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1,
            column: 23
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 11
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
      "12": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f2fff9f10c65a58017c310e0b96eadbb49b54eab"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_26ckrmpig = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_26ckrmpig();

function toggleState() {
  cov_26ckrmpig().f[0]++;
  // elements -- popup button, task list div, pomodoro timer div, focus task
  const popUpBtn = (cov_26ckrmpig().s[0]++, document.getElementById('popup-button'));
  const taskListDiv = (cov_26ckrmpig().s[1]++, document.getElementById('task-list'));
  const pomoDiv = (cov_26ckrmpig().s[2]++, document.getElementById('pomodoro-timer'));
  const focusTask = (cov_26ckrmpig().s[3]++, document.getElementById('focus-task'));
  cov_26ckrmpig().s[4]++;
  popUpBtn.classList.toggle('state');
  cov_26ckrmpig().s[5]++;
  taskListDiv.classList.toggle('state');
  cov_26ckrmpig().s[6]++;
  pomoDiv.classList.toggle('state');
  cov_26ckrmpig().s[7]++;
  focusTask.classList.toggle('state');
  cov_26ckrmpig().s[8]++;

  if (localStorage.getItem('state') === 'default') {
    cov_26ckrmpig().b[0][0]++;
    cov_26ckrmpig().s[9]++;
    localStorage.setItem('state', 'focus');
  } else {
    cov_26ckrmpig().b[0][1]++;
    cov_26ckrmpig().s[10]++;
    localStorage.setItem('state', 'default');
  }
}

const focusBtn = (cov_26ckrmpig().s[11]++, document.getElementById('focus-button'));
cov_26ckrmpig().s[12]++;
focusBtn.addEventListener('click', toggleState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvY3VzTW9kZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTdGF0ZSIsInBvcFVwQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tMaXN0RGl2IiwicG9tb0RpdiIsImZvY3VzVGFzayIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZm9jdXNCdG4iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEdBQXVCO0FBQUE7QUFDbkI7QUFDQSxRQUFNQyxRQUFRLDRCQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFkO0FBQ0EsUUFBTUMsV0FBVyw0QkFBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQUgsQ0FBakI7QUFDQSxRQUFNRSxPQUFPLDRCQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUgsQ0FBYjtBQUNBLFFBQU1HLFNBQVMsNEJBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFILENBQWY7QUFMbUI7QUFNbkJGLEVBQUFBLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsT0FBMUI7QUFObUI7QUFPbkJKLEVBQUFBLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsT0FBN0I7QUFQbUI7QUFRbkJILEVBQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekI7QUFSbUI7QUFTbkJGLEVBQUFBLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsT0FBM0I7QUFUbUI7O0FBVW5CLE1BQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixNQUFrQyxTQUF0QyxFQUFpRDtBQUFBO0FBQUE7QUFDN0NELElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixFQUE4QixPQUE5QjtBQUNILEdBRkQsTUFHSztBQUFBO0FBQUE7QUFDREYsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLFNBQTlCO0FBQ0g7QUFDSjs7QUFDRCxNQUFNQyxRQUFRLDZCQUFHVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFkOztBQUNBUyxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DYixXQUFuQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZVN0YXRlKCkge1xuICAgIC8vIGVsZW1lbnRzIC0tIHBvcHVwIGJ1dHRvbiwgdGFzayBsaXN0IGRpdiwgcG9tb2Rvcm8gdGltZXIgZGl2LCBmb2N1cyB0YXNrXG4gICAgY29uc3QgcG9wVXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtYnV0dG9uJyk7XG4gICAgY29uc3QgdGFza0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG4gICAgY29uc3QgcG9tb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb21vZG9yby10aW1lcicpOyBcbiAgICBjb25zdCBmb2N1c1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9jdXMtdGFzaycpO1xuICAgIHBvcFVwQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgdGFza0xpc3REaXYuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcbiAgICBwb21vRGl2LmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgZm9jdXNUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgJ2ZvY3VzJyk7ICBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsICdkZWZhdWx0Jyk7ICBcbiAgICB9XG59XG5jb25zdCBmb2N1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cy1idXR0b24nKTtcbmZvY3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU3RhdGUpOyJdfQ==
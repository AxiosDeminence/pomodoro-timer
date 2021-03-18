function cov_26ckrmpig() {
  var path = "/Users/efeichen/Documents/Academics/CSE 110/cse110-w21-group13/source/src/scripts/FocusMode.js";
  var hash = "8fd54b8c881a09528be936ef735f5a7e9834f728";
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
          line: 19,
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
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 49
        }
      },
      "11": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 61
        }
      },
      "12": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "13": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 33
        }
      },
      "14": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 56
        }
      },
      "15": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
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
            line: 20,
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
            line: 19,
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
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        }, {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        }],
        line: 16
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
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8fd54b8c881a09528be936ef735f5a7e9834f728"
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
    const title = (cov_26ckrmpig().s[11]++, document.getElementById('select-focus'));
    cov_26ckrmpig().s[12]++;

    if (title.innerHTML === 'All tasks complete!') {
      cov_26ckrmpig().b[1][0]++;
      cov_26ckrmpig().s[13]++;
      title.innerHTML = '';
    } else {
      cov_26ckrmpig().b[1][1]++;
    }
  }
}

const focusBtn = (cov_26ckrmpig().s[14]++, document.getElementById('focus-button'));
cov_26ckrmpig().s[15]++;
focusBtn.addEventListener('click', toggleState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvY3VzTW9kZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTdGF0ZSIsInBvcFVwQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhc2tMaXN0RGl2IiwicG9tb0RpdiIsImZvY3VzVGFzayIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwidGl0bGUiLCJpbm5lckhUTUwiLCJmb2N1c0J0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEdBQXVCO0FBQUE7QUFDbkI7QUFDQSxRQUFNQyxRQUFRLDRCQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFkO0FBQ0EsUUFBTUMsV0FBVyw0QkFBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQUgsQ0FBakI7QUFDQSxRQUFNRSxPQUFPLDRCQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQUgsQ0FBYjtBQUNBLFFBQU1HLFNBQVMsNEJBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFILENBQWY7QUFMbUI7QUFNbkJGLEVBQUFBLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsT0FBMUI7QUFObUI7QUFPbkJKLEVBQUFBLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsT0FBN0I7QUFQbUI7QUFRbkJILEVBQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekI7QUFSbUI7QUFTbkJGLEVBQUFBLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsT0FBM0I7QUFUbUI7O0FBVW5CLE1BQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixNQUFrQyxTQUF0QyxFQUFpRDtBQUFBO0FBQUE7QUFDN0NELElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixFQUE4QixPQUE5QjtBQUNILEdBRkQsTUFFTztBQUFBO0FBQUE7QUFDSEYsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLFNBQTlCO0FBQ0EsVUFBTUMsS0FBSyw2QkFBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQUgsQ0FBWDtBQUZHOztBQUdILFFBQUlTLEtBQUssQ0FBQ0MsU0FBTixLQUFvQixxQkFBeEIsRUFBK0M7QUFBQTtBQUFBO0FBQzNDRCxNQUFBQSxLQUFLLENBQUNDLFNBQU4sR0FBa0IsRUFBbEI7QUFDSCxLQUZEO0FBQUE7QUFBQTtBQUdIO0FBQ0o7O0FBQ0QsTUFBTUMsUUFBUSw2QkFBR1osUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQUgsQ0FBZDs7QUFDQVcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ2YsV0FBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0b2dnbGVTdGF0ZSgpIHtcbiAgICAvLyBlbGVtZW50cyAtLSBwb3B1cCBidXR0b24sIHRhc2sgbGlzdCBkaXYsIHBvbW9kb3JvIHRpbWVyIGRpdiwgZm9jdXMgdGFza1xuICAgIGNvbnN0IHBvcFVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJ1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xuICAgIGNvbnN0IHBvbW9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9tb2Rvcm8tdGltZXInKTtcbiAgICBjb25zdCBmb2N1c1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9jdXMtdGFzaycpO1xuICAgIHBvcFVwQnRuLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgdGFza0xpc3REaXYuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcbiAgICBwb21vRGl2LmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgZm9jdXNUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRlJyk7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgJ2ZvY3VzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgJ2RlZmF1bHQnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWZvY3VzJyk7XG4gICAgICAgIGlmICh0aXRsZS5pbm5lckhUTUwgPT09ICdBbGwgdGFza3MgY29tcGxldGUhJykge1xuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBmb2N1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cy1idXR0b24nKTtcbmZvY3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU3RhdGUpO1xuIl19
function cov_241nv9cxxr() {
  var path = "/Users/Ben/Local_Documents/git/2021/cse110-w21-group13/source/src/scripts/FocusMode.js";
  var hash = "761828278aa110e2233bf03ecf552564e67eb065";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Ben/Local_Documents/git/2021/cse110-w21-group13/source/src/scripts/FocusMode.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 4,
          column: 60
        }
      },
      "1": {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 5,
          column: 61
        }
      },
      "2": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "3": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 42
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 38
        }
      },
      "5": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 40
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "7": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 47
        }
      },
      "8": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 49
        }
      },
      "9": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 61
        }
      },
      "10": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "11": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 33
        }
      },
      "12": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 56
        }
      },
      "13": {
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
    hash: "761828278aa110e2233bf03ecf552564e67eb065"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_241nv9cxxr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_241nv9cxxr();

function toggleState() {
  cov_241nv9cxxr().f[0]++;
  // elements -- popup button, task list div, pomodoro timer div, focus task
  // const popUpBtn = document.getElementById('popup-button');
  const taskListDiv = (cov_241nv9cxxr().s[0]++, document.getElementById('task-list'));
  const pomoDiv = (cov_241nv9cxxr().s[1]++, document.getElementById('pomodoro-timer'));
  const focusTask = (cov_241nv9cxxr().s[2]++, document.getElementById('focus-task')); // popUpBtn.classList.toggle('state');

  cov_241nv9cxxr().s[3]++;
  taskListDiv.classList.toggle('state');
  cov_241nv9cxxr().s[4]++;
  pomoDiv.classList.toggle('state');
  cov_241nv9cxxr().s[5]++;
  focusTask.classList.toggle('state');
  cov_241nv9cxxr().s[6]++;

  if (localStorage.getItem('state') === 'default') {
    cov_241nv9cxxr().b[0][0]++;
    cov_241nv9cxxr().s[7]++;
    localStorage.setItem('state', 'focus');
  } else {
    cov_241nv9cxxr().b[0][1]++;
    cov_241nv9cxxr().s[8]++;
    localStorage.setItem('state', 'default');
    const title = (cov_241nv9cxxr().s[9]++, document.getElementById('select-focus'));
    cov_241nv9cxxr().s[10]++;

    if (title.innerHTML === 'All tasks complete!') {
      cov_241nv9cxxr().b[1][0]++;
      cov_241nv9cxxr().s[11]++;
      title.innerHTML = '';
    } else {
      cov_241nv9cxxr().b[1][1]++;
    }
  }
}

const focusBtn = (cov_241nv9cxxr().s[12]++, document.getElementById('focus-button'));
cov_241nv9cxxr().s[13]++;
focusBtn.addEventListener('click', toggleState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvY3VzTW9kZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVTdGF0ZSIsInRhc2tMaXN0RGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBvbW9EaXYiLCJmb2N1c1Rhc2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInRpdGxlIiwiaW5uZXJIVE1MIiwiZm9jdXNCdG4iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEdBQXVCO0FBQUE7QUFDbkI7QUFDQTtBQUNBLFFBQU1DLFdBQVcsNkJBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFILENBQWpCO0FBQ0EsUUFBTUMsT0FBTyw2QkFBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFILENBQWI7QUFDQSxRQUFNRSxTQUFTLDZCQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSCxDQUFmLENBTG1CLENBTW5COztBQU5tQjtBQU9uQkYsRUFBQUEsV0FBVyxDQUFDSyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixPQUE3QjtBQVBtQjtBQVFuQkgsRUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QjtBQVJtQjtBQVNuQkYsRUFBQUEsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixPQUEzQjtBQVRtQjs7QUFVbkIsTUFBSUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLFNBQXRDLEVBQWlEO0FBQUE7QUFBQTtBQUM3Q0QsSUFBQUEsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE9BQTlCO0FBQ0gsR0FGRCxNQUVPO0FBQUE7QUFBQTtBQUNIRixJQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsU0FBOUI7QUFDQSxVQUFNQyxLQUFLLDZCQUFHVCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFYO0FBRkc7O0FBR0gsUUFBSVEsS0FBSyxDQUFDQyxTQUFOLEtBQW9CLHFCQUF4QixFQUErQztBQUFBO0FBQUE7QUFDM0NELE1BQUFBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixFQUFsQjtBQUNILEtBRkQ7QUFBQTtBQUFBO0FBR0g7QUFDSjs7QUFDRCxNQUFNQyxRQUFRLDhCQUFHWCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBSCxDQUFkOztBQUNBVSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DZCxXQUFuQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZVN0YXRlKCkge1xuICAgIC8vIGVsZW1lbnRzIC0tIHBvcHVwIGJ1dHRvbiwgdGFzayBsaXN0IGRpdiwgcG9tb2Rvcm8gdGltZXIgZGl2LCBmb2N1cyB0YXNrXG4gICAgLy8gY29uc3QgcG9wVXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtYnV0dG9uJyk7XG4gICAgY29uc3QgdGFza0xpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG4gICAgY29uc3QgcG9tb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb21vZG9yby10aW1lcicpO1xuICAgIGNvbnN0IGZvY3VzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2N1cy10YXNrJyk7XG4gICAgLy8gcG9wVXBCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcbiAgICB0YXNrTGlzdERpdi5jbGFzc0xpc3QudG9nZ2xlKCdzdGF0ZScpO1xuICAgIHBvbW9EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcbiAgICBmb2N1c1Rhc2suY2xhc3NMaXN0LnRvZ2dsZSgnc3RhdGUnKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRlJykgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCAnZm9jdXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCAnZGVmYXVsdCcpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtZm9jdXMnKTtcbiAgICAgICAgaWYgKHRpdGxlLmlubmVySFRNTCA9PT0gJ0FsbCB0YXNrcyBjb21wbGV0ZSEnKSB7XG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGZvY3VzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvY3VzLWJ1dHRvbicpO1xuZm9jdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTdGF0ZSk7XG4iXX0=
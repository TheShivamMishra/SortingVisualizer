//====================== Merge Sort Algorithm ==========================================
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}


//============== Heap Sort Algorithm ====================================================
export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSortHelper(array, animations);
  return animations;
}

function heapSortHelper(mainArray, animations) {
  var n = mainArray.length - 1;
  for (let i = n; i >= 0; i--) {
    downHeapify(mainArray, i, n, animations);
  }
  for (let i = 0; i <= n; i++) {

    // Swaping last element with first and calling downHeapify agina.
    animations.push([0, n - i]);
    animations.push([0, n - i]);
    animations.push([0, mainArray[n - i]]);

    var temp = mainArray[0];
    mainArray[0] = mainArray[n - i];
    mainArray[n - i] = temp;

    animations.push([0, n - i]);
    animations.push([0, n - i]);
    animations.push([n - i, mainArray[n - i]]);

    downHeapify(mainArray, 0, n - i, animations);
  }
}

function downHeapify(arr, idx, n, animations) {
  let maxidx = idx;
  let lci = 2 * idx + 1;
  let rci = 2 * idx + 2;

  if (lci < n && (arr[lci] - arr[maxidx]) > 0) {
    animations.push([lci, maxidx]);
    animations.push([lci, maxidx]);
    animations.push([lci, arr[lci]]);
    maxidx = lci;
  }

  if (rci < n && (arr[rci] - arr[maxidx]) > 0) {
    animations.push([rci, maxidx]);
    animations.push([rci, maxidx]);
    animations.push([rci, arr[rci]]);
    maxidx = rci;
  }

  if (maxidx !== idx) {

    animations.push([idx, maxidx]);
    animations.push([idx, maxidx]);
    animations.push([idx, arr[maxidx]]);

    var temp = arr[idx];
    arr[idx] = arr[maxidx];
    arr[maxidx] = temp;

    animations.push([idx, maxidx]);
    animations.push([idx, maxidx]);
    animations.push([maxidx, arr[maxidx]]);

    downHeapify(arr, maxidx, n, animations);
  }
}




//================ Quick Sort Algorithm ===================================================
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  // const auxiliaryArray = array.slice();
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, left, right, animations) {
  var i = left;
  var j = right;
  var tmp;
  var pivotIdx = Math.trunc((left + right) / 2);
  var pivot = arr[pivotIdx];

  /* partition */
  while (i <= j) {
    while (arr[i] < pivot) {
      animations.push([i, pivotIdx]);
      animations.push([i, pivotIdx]);
      animations.push([i, arr[i]]);
      i++;
    }

    while (arr[j] > pivot) {
      animations.push([j, pivotIdx]);
      animations.push([j, pivotIdx]);
      animations.push([j, arr[j]]);
      j--;
    }

    if (i <= j) {
      animations.push([i, j]);
      animations.push([i, j]);
      animations.push([i, arr[j]]);

      animations.push([i, j]);
      animations.push([i, j]);
      animations.push([j, arr[i]]);
      tmp = arr[i];

      arr[i] = arr[j];

      arr[j] = tmp;

      i++;

      j--;
    }
  };

  /* recursion */

  if (left < j)

    quickSortHelper(arr, left, j, animations);

  if (i < right)

    quickSortHelper(arr, i, right, animations);
}



//================ Bubble Sorting Algorithm=================================================
export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(mainArray, animations) {
  for (let i = 0; i < mainArray.length - 1; i++) {
    for (let j = 0; j < mainArray.length - 1 - i; j++) {
      // animations.push([j, j + 1]);
      // animations.push([j, j + 1]);
      // animations.push([j, mainArray[j]]);
      if (mainArray[j] > mainArray[j + 1]) {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, mainArray[j + 1]]);
        const temp = mainArray[j];
        mainArray[j] = mainArray[j + 1];
        mainArray[j + 1] = temp;
      } else {
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j, mainArray[j]]);
      }
    }
    animations.push([mainArray.length - 1 - i, mainArray.length - 1 - i]);
    animations.push([mainArray.length - 1 - i, mainArray.length - 1 - i]);
    animations.push([
      mainArray.length - 1 - i,
      mainArray[mainArray.length - 1 - i],
    ]);
  }
}



//================= Selection Sort =========================================================
export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSortHelper(array, animations);
  return animations;
}

function selectionSortHelper(mainArray, animations) {
  var min = 0;
  for (let i = 0; i < mainArray.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < mainArray.length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      animations.push([j, mainArray[j]]);
      if (mainArray[min] > mainArray[j]) {
        min = j;
      }
    }
    animations.push([i, min]);
    animations.push([i, min]);
    animations.push([i, mainArray[min]]);
    var temp = mainArray[min];
    mainArray[min] = mainArray[i];
    mainArray[i] = temp;
  }
}


//===================== Insertion Sort Algorithm ==========================================
export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSortHelper(array, animations);
  return animations;
}

function insertionSortHelper(mainArray, animations) {
  for (let i = 0; i < mainArray.length; i++) {
    let j = i;

    //i is not the first element
    while (j > 0) {
      //not in order
      if (mainArray[j - 1] > mainArray[j]) {
        animations.push([j - 1, j]);
        animations.push([j - 1, j]);
        animations.push([j - 1, mainArray[j]]);
        //swmainArraypping
        let temp = mainArray[j - 1];
        mainArray[j - 1] = mainArray[j];
        mainArray[j] = temp;
        animations.push([j - 1, j]);
        animations.push([j - 1, j]);
        animations.push([j, mainArray[j]]);
      }
      //in order
      else {
        break;
      }
      j--;
    }
  }
}
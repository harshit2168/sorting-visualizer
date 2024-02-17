
// export function getMergeSortAnimations(array: number[]) {
//   const animations: any[] = [];
//   if (array.length <= 1) { return array; }
//   const tempArray = array.slice();
//   divide(array, 0, array.length - 1, animations, tempArray);
//   return animations;
// }


// function divide(arr: number[], start: number, end: number, animations: any[], tempArray: number[]) {
//   if (start >= end) {
//     return;
//   }
//   const mid = Math.floor((start + end) / 2);
//   divide(arr, start, mid, animations, tempArray);
//   divide(arr, mid + 1, end, animations, tempArray);
//   sortAndMerge(arr, start, mid, end, animations, tempArray);
// }

// function sortAndMerge(arr: number[], start: number, mid: number, end: number, animations: any[], tempArray: any) {
//   let index1 = start;
//   let index2 = mid + 1;
//   let k = 0;
//   while ((index1 <= mid) && (index2 <= end)) {
//     animations.push([index1, index2]);
//     animations.push([index1, index2]);
//     if (tempArray[index1] <= tempArray[index2]) {
//       animations.push([k, tempArray[index1]]);
//       arr[k++] = tempArray[index1++];
//     } else {
//       animations.push([k, tempArray[index2]]);
//       arr[k++] = tempArray[index2++];
//     }
//   }
//   while (index1 <= mid) {
//     animations.push([index1, index1]);
//     animations.push([index1, index1]);
//     animations.push([k, tempArray[index1]]);
//     arr[k++] = tempArray[index1++];
//   }
//   while (index2 <= end) {
//     animations.push([index2, index2]);
//     animations.push([index2, index2]);
//     animations.push([k, tempArray[index2]]);
//     arr[k++] = tempArray[index2++];
//   }
// }

export function getMergeSortAnimations(array:number[]) {
  const animations: any[] = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray: any[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: any[],
  animations: any[],
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray: any[],
  startIdx: any,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: any[],
  animations: any[][],
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




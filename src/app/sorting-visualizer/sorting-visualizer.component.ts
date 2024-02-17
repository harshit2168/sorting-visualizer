// sorting-visualizer.component.ts
import { Component, OnInit } from '@angular/core';
import { getMergeSortAnimations } from './sorting-algorithms';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.css']
})
export class SortingVisualizerComponent implements OnInit {
  array: number[] = [];
  // This is the main color of the array bars.
  ANIMATION_SPEED_MS = 1;
  NUMBER_OF_ARRAY_BARS = 15;
  PRIMARY_COLOR = 'turquoise';
  SECONDARY_COLOR = 'red';

  ngOnInit() {
    this.resetArray();
  }

  resetArray() {
    this.array = Array.from({ length: this.NUMBER_OF_ARRAY_BARS }, () =>  this.randomIntFromInterval(10, 600));
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = (arrayBars[barOneIdx] as HTMLElement).style;
        const barTwoStyle = (arrayBars[barTwoIdx] as HTMLElement).style;
        const color = i % 3 === 0 ? this.SECONDARY_COLOR : this.PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = (arrayBars[barOneIdx] as HTMLElement).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.ANIMATION_SPEED_MS);
      }
    };
  }

}

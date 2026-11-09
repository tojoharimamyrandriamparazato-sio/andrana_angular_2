import { Pipe, PipeTransform } from '@angular/core';
import { Level } from '../models/level';

const LEVELS: Record<Level, string> = {
  "X": "Iksa",
  "Y": "Igreka",
  "Z": "Zeda"
}

@Pipe({
  name: 'level',
})
export class LevelPipe implements PipeTransform {
  transform(value: Level): unknown {
    return LEVELS[value] || value;
  }
}

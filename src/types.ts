/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
    [key: string]: string; // Support additional keys if any
  };
  answer: string;
  tag?: string;
  _shuffledOptionKeys?: string[];
}

export type UserSelections = Record<number, string>;

export interface Chapter {
  id: number;
  name: string;
  description: string;
}

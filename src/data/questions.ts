import { Question } from '../models/question.model';

export const questions: Question[] = [
    {
        name: 'Find maximum in array',
        id: '1',
        description: 'given an array of unsorted numbers, find the maximum value.',
        exemples: [
            { input: '[90, 75, -10, 30, 105, 31]', output: '105' },
            { input: '[-1, -1, -1, -2, -1]', output: '-1' }
        ],
        expectedComplexity: 'O(n)',
        startingText:
            `public Integer findMaxInArray(Integer[] array) {

}`,
        tags: ['arrays']
    },
    {
        name: 'Bubble Sort',
        id: '2',
        description: 'given an array of unsorted numbers, sort the array using bubble sort algorithm.',
        exemples: [
            { input: '[90, 75, -10, 30, 105, 31]', output: '[-10, 30, 31, 75, 90, 105]' },
            { input: '[-1, -1, -1, -2, -1]', output: '[-2, -1, -1, -1, -1]' }
        ],
        expectedComplexity: 'O(n^2)',
        startingText:
            `public Integer[] bubbleSort(Integer[] array) {

}`,
        tags: ['sorting', 'arrays' ]
    },
    {
        name: 'Marge Sort',
        id: '3',
        description: 'given an array of unsorted numbers, sort the array using marge sort algorithm.',
        exemples: [
            { input: '[90, 75, -10, 30, 105, 31]', output: '[-10, 30, 31, 75, 90, 105]' },
            { input: '[-1, 0, -1, -2, 5]', output: '[-2, -1, -1, 0, 5]' }
        ],
        expectedComplexity: 'O(n*log(n))',
        startingText:
            `public Integer[] mergeSort(Integer[] array) {

}`,
        tags: ['sorting', 'arrays']
    },
    {
        name: 'Binary Search',
        id: '4',
        description:
        'given an array of sorted numbers, find the index of first appearance of the givan '
        + 'value using binary search algorithm, in case the value is\'nt included in the array return -1.',
        exemples: [
            { input: 'array: [10, 30, 31, 75, 75, 90, 105], value: 75', output: '3' },
            { input: 'array: [-2, -1, -1, 0, 5, 14], value: 3', output: '-1' }
        ],
        expectedComplexity: 'O(log(n))',
        startingText:
            `public Integer binarySearch(Integer[] array, Integer value) {

}`,
        tags: ['search', 'arrays']
    },
    {
        name: 'some questions',
        id: '0',
        description: '',
        exemples: [],
        expectedComplexity: '',
        startingText: '',
        tags: []
    },
    {
        name: 'some questions',
        id: '0',
        description: '',
        exemples: [],
        expectedComplexity: '',
        startingText: '',
        tags: []
    },
    {
        name: 'some questions',
        id: '0',
        description: '',
        exemples: [],
        expectedComplexity: '',
        startingText: '',
        tags: []
    },
    {
        name: 'some questions',
        id: '0',
        description: '',
        exemples: [],
        expectedComplexity: '',
        startingText: '',
        tags: []
    },
    {
        name: 'some questions',
        id: '0',
        description: '',
        exemples: [],
        expectedComplexity: '',
        startingText: '',
        tags: []
    }
];

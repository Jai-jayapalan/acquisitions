import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

const isTest = process.env.NODE_ENV === 'test';

export const aj = isTest ? {
  withRule: () => ({
      protect: async () => ({
      isDenied: () => false,
    }),
  }),
} : arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
    }),
    slidingWindow({
      mode: 'LIVE',
      interval: '2s',
      max: 5,
    }),
  ],
});

import {Hook} from '@oclif/core';

const hook: Hook<'init'> = async function (options) {
  console.log(`example init hook running before ${options.id}`);
};

export default hook;

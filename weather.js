#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue , TOKEN_DICTIONARY} from "./services/storage.services.js";

const saveToken = async (token) => {
  if(!token.length) {
    printError(" не передан токен");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('токен сохранен')
  } catch (e) {
    printError(e.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if(args.h) {
    printHelp()
  }
  if(args.s) {
    
  }
  if(args.t) {
    return saveToken( args.t)
  }
  getWeather('moscow')
}

initCLI()
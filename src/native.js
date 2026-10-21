// Jedino mjesto koje smije importati @capacitor/* pakete. Ostatak koda zove ove funkcije.
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

export const jeNativno = () => Capacitor.isNativePlatform();
export const spremi = (kljuc, vrijednost) => Preferences.set({ key: kljuc, value: vrijednost });
export const procitaj = async (kljuc) => (await Preferences.get({ key: kljuc })).value;

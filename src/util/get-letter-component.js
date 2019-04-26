import LetterA from '../letters/LetterA.svelte';
import LetterB from '../letters/LetterB.svelte';
import LetterC from '../letters/LetterC.svelte';
import LetterD from '../letters/LetterD.svelte';
import LetterE from '../letters/LetterE.svelte';
import LetterF from '../letters/LetterF.svelte';
import LetterG from '../letters/LetterG.svelte';
import LetterH from '../letters/LetterH.svelte';
import LetterI from '../letters/LetterI.svelte';
import LetterJ from '../letters/LetterJ.svelte';
import LetterK from '../letters/LetterK.svelte';
import LetterL from '../letters/LetterL.svelte';
import LetterM from '../letters/LetterM.svelte';
import LetterN from '../letters/LetterN.svelte';
import LetterO from '../letters/LetterO.svelte';
import LetterP from '../letters/LetterP.svelte';
import LetterQ from '../letters/LetterQ.svelte';
import LetterR from '../letters/LetterR.svelte';
import LetterS from '../letters/LetterS.svelte';
import LetterT from '../letters/LetterT.svelte';
import LetterU from '../letters/LetterU.svelte';
import LetterV from '../letters/LetterV.svelte';
import LetterW from '../letters/LetterW.svelte';
import LetterX from '../letters/LetterX.svelte';
import LetterY from '../letters/LetterY.svelte';
import LetterZ from '../letters/LetterZ.svelte';

const letters = {
	a: LetterA,
	b: LetterB,
	c: LetterC,
	d: LetterD,
	e: LetterE,
	f: LetterF,
	g: LetterG,
	h: LetterH,
	i: LetterI,
	j: LetterJ,
	k: LetterK,
	l: LetterL,
	m: LetterM,
	n: LetterN,
	o: LetterO,
	p: LetterP,
	q: LetterQ,
	r: LetterR,
	s: LetterS,
	t: LetterT,
	u: LetterU,
	v: LetterV,
	w: LetterW,
	x: LetterX,
	y: LetterY,
	z: LetterZ
};

export default function getLetterComponent(letter) {
	if ('abcdefghijklmnopqrstuvwxyz'.split('').includes(letter) === false) {
		throw 'Wrong letter provided. Got `' + letter + '`';
	}

	return letters[letter];
}

import vhtml from 'vhtml';
import { REVISION } from 'three';

/** @jsx vhtml */

export function Footer() {
	return (
		<footer>
			<a class="item" target="_blank" href="https://mti.it.northwestern.edu/">
				Northwestern Media & Technology Innovation
			</a>

			<span class="separator" aria-hidden="true">
				|
			</span>

			<a class="item" target="_blank" href="https://threejs.org/">
				three.js r{REVISION}
			</a>

			<span class="separator" aria-hidden="true">
				|
			</span>

			<a
				class="item"
				target="_blank"
				href="https://github.com/northwestern-mti/bienen-piano-viewer/issues/new"
			>
				help & feedback
			</a>

			<span class="separator" aria-hidden="true">
				|
			</span>

			<a class="item" target="_blank" href="https://github.com/northwestern-mti/bienen-piano-viewer">
				github
			</a>
		</footer>
	);
}

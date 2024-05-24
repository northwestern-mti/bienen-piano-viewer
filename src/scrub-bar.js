function toMinutesAndSeconds(numSeconds) {
	const minutes = Math.floor(numSeconds / 60);
	const seconds = Math.floor(numSeconds % 60);
	return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}


export class ScrubBar {
  constructor(el) {
    this.paused = true

    this.button = el.querySelector('#play-button');
    this.audio  = el.querySelector('#piano-audio');

    this.button.onclick = this.play.bind(this)
  }

  setApp(app) {
    this.app = app
  }

  play() {

    // Play the media
		this.app.viewer.play()
		this.audio.play()

    // Update the play button
		this.button.innerText = 'Pause'
		this.button.onclick   = this.pause.bind(this)

    // Update internal state
		this.paused = false;
	}

  pause() {

    // Pause the media
		this.app.viewer.pause()
		this.audio.pause()

    // Update the play button
		this.button.innerText = 'Play'
		this.button.onclick   = this.play.bind(this)

    // Update internal state
		this.paused = true;
	}

  seekTo(e) {

    // Compute the new desired time
		const percent = e.target.value
		const newTime = this.app.viewer.clips[0].duration * percent / 100

    // Update the media
		this.app.viewer.mixer.setTime(newTime);
		this.audio.currentTime = newTime;
	}

  updateTime(currentTime, totalTime) {
    document.getElementById('scrub-current-time').innerText = toMinutesAndSeconds(currentTime);
    document.getElementById('scrub-total-time').innerText   = toMinutesAndSeconds(totalTime);
  
    document.getElementById('seek-range').value = (currentTime / totalTime * 100) % 100
  }

  startScrub() {
		this.app.viewer.pause()
		this.audio.pause()
	}

	endScrub() {
		if (!this.paused) {
			this.app.viewer.play()
			this.audio.play()
		}
	}
}

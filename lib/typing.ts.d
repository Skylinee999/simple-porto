/**
 * Smooth typing effect that fades & slides in each character.
 *
 * features:
 * - per-character fade-in (smooth)
 * - optional backspace (hapus) with fade-out
 * - loop over array of phrases
 * - configurable speeds and delays
 *
 * Usage: new SmoothTyper(el, phrases, options).start()
 * Created by balxzzy
 */
"use client"
export interface SmoothTyperOptions {
  typeSpeed?: number
  deleteSpeed?: number
  charFadeDelay?: number
  pauseAfter?: number
  loop?: boolean
  cursorEl?: HTMLElement | null
}

export default class SmoothTyper {
  private container: HTMLElement
  private phrases: string[]
  private opts: Required<SmoothTyperOptions>
  private _isRunning: boolean
  private _phraseIndex: number
  private _charNodes: HTMLSpanElement[]

  constructor(container: HTMLElement, phrases: string[], opts: SmoothTyperOptions = {}) {
    this.container = container
    this.phrases = phrases
    this.opts = {
      typeSpeed: 50,
      deleteSpeed: 25,
      charFadeDelay: 10,
      pauseAfter: 1000,
      loop: true,
      cursorEl: null,
      ...opts,
    }
    this._isRunning = false
    this._phraseIndex = 0
    this._charNodes = []
  }

  private _clearDOM(): void {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }
    this._charNodes = []
  }

  private _createCharSpan(ch: string): HTMLSpanElement {
    const span = document.createElement('span')
    span.className =
      'char opacity-0 translate-y-[0.3em] transition duration-200 ease-out inline-block font-bold'
    span.textContent = ch
    return span
  }

  private async _typePhrase(phrase: string): Promise<boolean> {
    this._clearDOM()
    for (let i = 0; i < phrase.length; i++) {
      const span = this._createCharSpan(phrase[i])
      this.container.appendChild(span)
      this._charNodes.push(span)
    }

    for (let i = 0; i < this._charNodes.length; i++) {
      if (!this._isRunning) return false
      const span = this._charNodes[i]
      await this._sleep(this.opts.charFadeDelay)
      span.classList.remove('opacity-0', 'translate-y-[0.3em]')
      await this._sleep(Math.max(0, this.opts.typeSpeed - this.opts.charFadeDelay))
    }
    return true
  }

  private async _deletePhrase(): Promise<boolean> {
    for (let i = this._charNodes.length - 1; i >= 0; i--) {
      if (!this._isRunning) return false
      const span = this._charNodes[i]
      span.classList.add('opacity-0', 'translate-y-[0.3em]')
      await this._sleep(this.opts.deleteSpeed)
      if (span.parentNode) span.parentNode.removeChild(span)
    }
    this._charNodes = []
    return true
  }

  private _sleep(ms: number): Promise<void> {
    return new Promise((res) => setTimeout(res, ms))
  }

  async start(): Promise<void> {
    if (this._isRunning) return
    this._isRunning = true
    if (this.opts.cursorEl) this.opts.cursorEl.style.opacity = '1'
    console.log('SmoothTyper loaded')
    while (this._isRunning) {
      const phrase = this.phrases[this._phraseIndex % this.phrases.length]
      const ok = await this._typePhrase(phrase)
      if (!ok) break
      await this._sleep(this.opts.pauseAfter)
      if (!this._isRunning) break
      await this._deletePhrase()
      await this._sleep(240)
      this._phraseIndex++
      if (!this.opts.loop && this._phraseIndex >= this.phrases.length) {
        break
      }
    }

    this._isRunning = false
    if (this.opts.cursorEl) this.opts.cursorEl.style.opacity = '0'
  }

  stop(): void {
    this._isRunning = false
  }
}
class ArticleElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  /**
       * @param {any} event
       */
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="content">
          <h2 class="content__heading">Boost Your Activities!</h2>
          <div id="articles" class="articles">
            <div class="article-item">
              <div class="article-item__header">
                <img src="" alt="Article" class="article-item__header-poster">
              </div>
              <div class="article-item__content">
                <h3 class="article__title"><a target="__blank" rel="noreferrer" href="https://hbr.org/2022/05/resisting-the-pressure-to-overwork">Understand That Overwork Is Not Necessary For Success</a></h3>
                <h4>Source: hbr.org</h4>
                <p>
                  If you buy into that thinking, even just a tiny bit, you won’t be able to resist triggers, like others telling you about their overworking. This social pressure will activate your anxiety, with all the attendant emotional and physical reactions.
                  Here’s an example. Another author recently told me how many podcasts interviews they’d done to support their book launch. It was far more than me, and this sent me into a spiral of worry. Even hours later, my heart rate remained elevated and my mind kept drifting back to it.
                  To avoid the temptation to keep up with vocal overworkers like that author you need to radically reject the idea that such behavior is required or even beneficial. In my case, I literally had to say to myself, “That person believes overworking is necessary for success. I don’t believe that.”
                  If a situation continues to trigger you, consider using even more compassionate self-talk. For example, “I feel anxious that if I don’t buy into their assumptions, I’m going to fail. My success is important to me, so that’s scary. But I’m going to remind myself about how I can do my best work through methods that don’t involve overworking.”
                </p>
              </div>
            </div>
            <div class="article-item">
              <div class="article-item__header">
                <img src="" alt="Article" class="article-item__header-poster">
              </div>
              <div class="article-item__content">
                <h3 class="article__title"><a href="https://hbr.org/2022/05/resisting-the-pressure-to-overwork">Understand That Overwork Is Not Necessary For Success</a></h3>
                <h4>Source: hbr.org</h4>
                <p>
                  If you buy into that thinking, even just a tiny bit, you won’t be able to resist triggers, like others telling you about their overworking. This social pressure will activate your anxiety, with all the attendant emotional and physical reactions.
                  Here’s an example. Another author recently told me how many podcasts interviews they’d done to support their book launch. It was far more than me, and this sent me into a spiral of worry. Even hours later, my heart rate remained elevated and my mind kept drifting back to it.
                  To avoid the temptation to keep up with vocal overworkers like that author you need to radically reject the idea that such behavior is required or even beneficial. In my case, I literally had to say to myself, “That person believes overworking is necessary for success. I don’t believe that.”
                  If a situation continues to trigger you, consider using even more compassionate self-talk. For example, “I feel anxious that if I don’t buy into their assumptions, I’m going to fail. My success is important to me, so that’s scary. But I’m going to remind myself about how I can do my best work through methods that don’t involve overworking.”
                </p>
              </div>
            </div>
            <div class="article-item">
              <div class="article-item__header">
                <img src="" alt="Article" class="article-item__header-poster">
              </div>
              <div class="article-item__content">
                <h3 class="article__title"><a href="https://hbr.org/2022/05/resisting-the-pressure-to-overwork">Understand That Overwork Is Not Necessary For Success</a></h3>
                <h4>Source: hbr.org</h4>
                <p>
                  If you buy into that thinking, even just a tiny bit, you won’t be able to resist triggers, like others telling you about their overworking. This social pressure will activate your anxiety, with all the attendant emotional and physical reactions.
                  Here’s an example. Another author recently told me how many podcasts interviews they’d done to support their book launch. It was far more than me, and this sent me into a spiral of worry. Even hours later, my heart rate remained elevated and my mind kept drifting back to it.
                  To avoid the temptation to keep up with vocal overworkers like that author you need to radically reject the idea that such behavior is required or even beneficial. In my case, I literally had to say to myself, “That person believes overworking is necessary for success. I don’t believe that.”
                  If a situation continues to trigger you, consider using even more compassionate self-talk. For example, “I feel anxious that if I don’t buy into their assumptions, I’m going to fail. My success is important to me, so that’s scary. But I’m going to remind myself about how I can do my best work through methods that don’t involve overworking.”
                </p>
              </div>
            </div>
          </div>
        </div>
          `;
  }
}
customElements.define('article-element', ArticleElement);

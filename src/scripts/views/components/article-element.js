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
              <div class="article-item__content">
                <h3 class="article__title">Becoming Productive</h3>
                <h4>Author: Rizqi MKS</h4>
                <p>
                Productive is not always about hard working, but sometimes it is about managing. You need to manage your time, your what to do, your hobby, and so on, in order to achieve the productiveness of you.
                </p>
              </div>
            </div>
            <div class="article-item">
              <div class="article-item__content">
                <h3 class="article__title">Be Yourself, Be Not</h3>
                <h4>Author: Rizqi MKS</h4>
                <p>
                Sometimes people get confused on how to achieve their productiveness. Most common reason is that people always see others people work, and not themselves. That always lead to an ignorant emotion where you feel like what youre doing is just does not make any changes on your life. So be yourself, but not be your bad-self.
                </p>
              </div>
            </div>
            <div class="article-item">
              <div class="article-item__content">
                <h3 class="article__title">Take A Break!</h3>
                <h4>Author: Rizqi MKS</h4>
                <p>
                Take a break when you already meet your schedule. It is also important to note that working makes you stress, whether it is a little or more. So don't be afraid to take a break. That will help you eventually to achieve your productivity as well.
                </p>
              </div>
            </div>
            <div class="article-item">
              <div class="article-item__content">
                <h3 class="article__title">Do Not Overdo!</h3>
                <h4>Author: Rizqi MKS</h4>
                <p>
                As i have mention in the earlier post, do not overdo yourself to achieve productiveness. Given by the data, you just need to do your work on your own pace. That way you can also achieve productivity and good resolution on feeling also.
                </p>
              </div>
            </div>
          </div>
        </div>
          `;
  }
}
customElements.define('article-element', ArticleElement);

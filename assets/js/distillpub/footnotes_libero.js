class Footnote extends HTMLElement {
  constructor() {
    super();

    const options = {
      childList: true,
      characterData: true,
      subtree: true,
    };
    const observer = new MutationObserver(this.notify);
    observer.observe(this, options);
  }

  notify() {
    const options = { detail: this, bubbles: true };
    const event = new CustomEvent("onFootnoteChanged", options);
    document.dispatchEvent(event);
  }

  connectedCallback() {
    this.hoverBox = this.root.querySelector("d-hover-box");
    window.customElements.whenDefined("d-hover-box").then(() => {
      this.hoverBox.listen(this);
    });
    Footnote.currentFootnoteId += 1;
    const IdString = Footnote.currentFootnoteId.toString();
    this.root.host.id = "d-footnote-" + IdString;

    const id = "dt-fn-hover-box-" + IdString;
    this.hoverBox.id = id;

    const span = this.root.querySelector("#fn-");
    span.setAttribute("id", "fn-" + IdString);
    span.setAttribute("data-hover-ref", id);
    span.textContent = IdString;
  }
}

Footnote.currentFootnoteId = 0;

class FootnoteList extends HTMLElement {
  connectedCallback() {
    this.list = this.root.querySelector("ol");
    this.root.style.display = "none";
  }

  set footnotes(footnotes) {
    this.list.innerHTML = "";
    if (footnotes.length) {
      this.root.style.display = "";
      for (const footnote of footnotes) {
        const listItem = document.createElement("li");
        listItem.id = footnote.id + "-listing";
        listItem.innerHTML = footnote.innerHTML;

        const backlink = document.createElement("a");
        backlink.setAttribute("class", "footnote-backlink");
        backlink.textContent = "[↩]";
        backlink.href = "#" + footnote.id;

        listItem.appendChild(backlink);
        this.list.appendChild(listItem);
      }
    } else {
      this.root.style.display = "none";
    }
  }
}

// JavaScript Document
/* Carousel
https://github.com/benkimo6i/vanilla-js-carousel
  MIT License

  Copyright (c) 2022 Benjamin Kim

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE. */

class Carousel {
    constructor(el) {
      this.el = el;
      this.carouselOptions = ['previous', 'next'];
      this.carouselData = [
        {
          'id': '1',
          'src': 'https://video.stratus.nrel.gov/bt23-county-map-all-scenarios.gif',
        },
        {
          'id': '2',
          'src': 'https://video.stratus.nrel.gov/bt23-treemap-all-scenarios.gif',
        },
        {
          'id': '3',
          'src': 'https://video.stratus.nrel.gov/bt23-stepwise-supply-all-scenarios.gif',
        }
      ];
      this.carouselInView = [1, 2, 3];
      this.carouselContainer;
      this.carouselPlayState;
    }
    mounted() {
      this.setupCarousel();
    }
    setupCarousel() {
      const container = document.createElement('div');
      const controls = document.createElement('div');
      this.el.append(container, controls);
      container.className = 'carousel2-container mt-1';
      controls.className = 'carousel2-controls';
      this.carouselData.forEach((item, index) => {
        const carouselOuter = document.createElement('div');
        const carouselInner = document.createElement('div');
        const carouselImg = document.createElement('img');
        carouselImg.setAttribute('aria-describedby', `carousel2-item-${index + 1}-description`);
        carouselImg.src = item.src;
        carouselImg.setAttribute('loading', 'lazy');
        carouselInner.className = 'bg-white h-100 p-2';
        carouselOuter.className = `carousel2-item carousel2-item-${index + 1}`;
        carouselOuter.setAttribute('data-index', `${index + 1}`);
        carouselInner.append(carouselImg);
        carouselOuter.append(carouselInner);
        container.append(carouselOuter);
      });
      this.carouselOptions.forEach((option) => {
        const btn = document.createElement('button');
        const axSpan = document.createElement('span');
        axSpan.innerText = option;
        axSpan.className = 'ax-hidden';
        btn.append(axSpan);
        btn.className = `carousel2-control carousel2-control-${option}`;
        btn.setAttribute('data-name', option);
        controls.append(btn);
      });
      this.setControls([...controls.children]);
      this.carouselContainer = container;
    }
    setControls(controls) {
      controls.forEach(control => {
        control.onclick = (event) => {
          event.preventDefault();
          this.controlManager(control.dataset.name);
        };
      });
    }
    controlManager(control) {
      if (control === 'previous') return this.previous();
      if (control === 'next') return this.next();
      if (control === 'add') return this.add();
      if (control === 'play') return this.play();
      return;
    }
    previous() {
      this.carouselData.unshift(this.carouselData.pop());
      this.carouselInView.push(this.carouselInView.shift());
      this.carouselInView.forEach((item, index) => {
        this.carouselContainer.children[index].className = `carousel2-item carousel2-item-${item}`;
      });
      this.carouselData.slice(0, 5).forEach((data, index) => {
        document.querySelector(`.carousel2-item-${index + 1}`).src = data.src;
      });
    }
    next() {
      this.carouselData.push(this.carouselData.shift());
      this.carouselInView.unshift(this.carouselInView.pop());
      this.carouselInView.forEach((item, index) => {
        this.carouselContainer.children[index].className = `carousel2-item carousel2-item-${item}`;
      });
      this.carouselData.slice(0, 5).forEach((data, index) => {
        document.querySelector(`.carousel2-item-${index + 1}`).src = data.src;
      });
    }
    add() {
      const newItem = {
        'id': '',
        'src': '',
      };
      const lastItem = this.carouselData.length;
      const lastIndex = this.carouselData.findIndex(item => item.id == lastItem);
      Object.assign(newItem, {
        id: `${lastItem + 1}`,
        src: `http://fakeimg.pl/300/?text=${lastItem + 1}`
      });
      this.carouselData.splice(lastIndex + 1, 0, newItem);
      this.next();
    }
    play() {
      const playBtn = document.querySelector('.carousel2-control-play');
      const startPlaying = () => this.next();
      if (playBtn.classList.contains('playing')) {
        playBtn.classList.remove('playing');
        clearInterval(this.carouselPlayState); 
        this.carouselPlayState = null; 
      } else {
        playBtn.classList.add('playing');
        this.next();
        this.carouselPlayState = setInterval(startPlaying, 1500);
      }
    }
  }
  const exampleCarousel = new Carousel(document.getElementById('ect-carousel'));
  exampleCarousel.mounted();
  /* End Carousel */
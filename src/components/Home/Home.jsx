import React from 'react'

const Home = () => {
  return (
    <div>
        <main>
			<nav class="menu">
				<div class="menu__bg"></div>
				<button class="menu__button unbutton" aria-label="Toggle menu">
					<svg width="22" height="23" viewBox="0 0 22 23">
						<path class="menu__button-lines" d="M0 3h22M0 11h22M0 19h22"/>
						<path class="menu__button-cross" d="M19.64.359 2.36 22.641m17.28 0L2.36.359"/>
					</svg>
				</button>
				<div class="menu__items">
					<a data-splitting href="#" class="menu__item">About</a>
					<a data-splitting href="#" class="menu__item">Novels</a>
					<a data-splitting href="#" class="menu__item">Memoirs</a>
					<a data-splitting href="#" class="menu__item">Legacy</a>
					<a data-splitting href="#" class="menu__item">Gallery</a>
					<a data-splitting href="#" class="menu__item">Contact</a>
				</div>
				<h3 class="menu__tagline">Literature &amp; Japan</h3>
			</nav>	
			<div class="frame">
				<h1 class="frame__title">Letter Shuffle Menu</h1>
				<nav class="frame__links">
					<a class="hover-line" href="http://tympanus.net/Development/ExpandingRoundedMenu/">Previous demo</a>
					<a class="hover-line" href="https://tympanus.net/codrops/?p=59837">Article</a>
					<a class="hover-line" href="https://github.com/codrops/LetterShuffleMenu">GitHub</a>
				</nav>
			</div>
			<div class="content">
				<div class="content__column">
					<p>I began trying to make my confession to Buddha; but tears choked me and <a href="#" class="hover-line">my voice</a> fell to a whisper. It was now quite dark. I went to the window and looked out. The Chapel stood high, and below it was what seemed like a precipitous <a href="#" class="hover-line">ravine</a>; it lay in a cup or hollow and the steep banks on either side were overgrown with tall trees, so that the place was very closed-in and dark.</p>
				</div>
				<div class="content__column">
					<p>The moon was some twenty days old and having risen late in the night was now <a href="#" class="hover-line">shining</a> with extraordinary brilliance. Here and there the moonlight pierced through the trees, making sudden patches of brightness; there was one such just at the foot of the cliff. Looking straight below me I could see what appeared to be a vast lake, but was indeed only a small drinking-pool. </p>
					<p class="color-alt">Murasaki, The Sacred Tree</p>
				</div>
			</div>
			<button class="button-next unbutton">
				<svg width="24px" height="12px" viewBox="0 0 24 12"><path d="M18.972.225c-.3-.3-.781-.3-1.081 0-.3.3-.3.782 0 1.082l3.495 3.496H.763A.762.762 0 0 0 0 5.565c0 .426.344.77.763.77H21.38L17.884 9.83c-.3.3-.3.782 0 1.082.15.15.344.225.544.225.2 0 .394-.075.544-.225l4.803-4.803a.766.766 0 0 0 0-1.088L18.972.225Z" fill="#4c2d4e"/></svg>
			</button>
		</main>
    </div>
  )
}

export default Home
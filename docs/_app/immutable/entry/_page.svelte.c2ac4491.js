import {
	S as Me,
	i as Ve,
	s as Le,
	k as r,
	a as S,
	q as j,
	l as c,
	m as o,
	h as s,
	c as P,
	r as A,
	n as t,
	L as Ce,
	b as de,
	E as e,
	u as Se,
	F as Pe,
	C as je,
	M as Te,
	D as Ae,
	g as ee,
	f as He,
	d as ue,
	N as Oe,
	y as Be,
	z as Ue,
	A as qe,
	B as Fe,
	v as We
} from '../chunks/index.45ab08d9.js';
function xe(f) {
	let n, i, a, l, _, E, g, k, D, H, z, v, I, O, C, p, M;
	return {
		c() {
			(n = r('article')),
				(i = r('div')),
				(a = r('div')),
				(l = r('img')),
				(g = S()),
				(k = r('div')),
				(D = r('h3')),
				(H = j(f[0])),
				(z = S()),
				(v = r('a')),
				(I = r('p')),
				(O = j(f[2])),
				(C = S()),
				(p = r('p')),
				(M = j('See Details')),
				this.h();
		},
		l(m) {
			n = c(m, 'ARTICLE', { class: !0 });
			var b = o(n);
			i = c(b, 'DIV', { class: !0 });
			var V = o(i);
			a = c(V, 'DIV', {});
			var w = o(a);
			(l = c(w, 'IMG', { class: !0, alt: !0, src: !0 })),
				w.forEach(s),
				(g = P(V)),
				(k = c(V, 'DIV', { class: !0 }));
			var L = o(k);
			D = c(L, 'H3', { class: !0 });
			var x = o(D);
			(H = A(x, f[0])),
				x.forEach(s),
				L.forEach(s),
				(z = P(V)),
				(v = c(V, 'A', { href: !0, class: !0 }));
			var B = o(v);
			I = c(B, 'P', { class: !0 });
			var N = o(I);
			(O = A(N, f[2])), N.forEach(s), (C = P(B)), (p = c(B, 'P', { class: !0 }));
			var G = o(p);
			(M = A(G, 'See Details')), G.forEach(s), B.forEach(s), V.forEach(s), b.forEach(s), this.h();
		},
		h() {
			t(l, 'class', 'card__image svelte-1u1d5zf'),
				t(l, 'alt', (_ = f[0] + ' Preview Image')),
				Ce(l.src, (E = f[1])) || t(l, 'src', E),
				t(D, 'class', 'card__title svelte-1u1d5zf'),
				t(k, 'class', 'card__title-container svelte-1u1d5zf'),
				t(I, 'class', 'card__info__desc svelte-1u1d5zf'),
				t(p, 'class', 'card__info__action svelte-1u1d5zf'),
				t(v, 'href', f[3]),
				t(v, 'class', 'card__info svelte-1u1d5zf'),
				t(i, 'class', 'card__container svelte-1u1d5zf'),
				t(n, 'class', 'card svelte-1u1d5zf');
		},
		m(m, b) {
			de(m, n, b),
				e(n, i),
				e(i, a),
				e(a, l),
				e(i, g),
				e(i, k),
				e(k, D),
				e(D, H),
				e(i, z),
				e(i, v),
				e(v, I),
				e(I, O),
				e(v, C),
				e(v, p),
				e(p, M);
		},
		p(m, [b]) {
			b & 1 && _ !== (_ = m[0] + ' Preview Image') && t(l, 'alt', _),
				b & 2 && !Ce(l.src, (E = m[1])) && t(l, 'src', E),
				b & 1 && Se(H, m[0]),
				b & 4 && Se(O, m[2]),
				b & 8 && t(v, 'href', m[3]);
		},
		i: Pe,
		o: Pe,
		d(m) {
			m && s(n);
		}
	};
}
function Ge(f, n, i) {
	let { title: a } = n,
		{ image: l } = n,
		{ description: _ } = n,
		{ url: E } = n;
	return (
		(f.$$set = (g) => {
			'title' in g && i(0, (a = g.title)),
				'image' in g && i(1, (l = g.image)),
				'description' in g && i(2, (_ = g.description)),
				'url' in g && i(3, (E = g.url));
		}),
		[a, l, _, E]
	);
}
class Re extends Me {
	constructor(n) {
		super(), Ve(this, n, Ge, xe, Le, { title: 0, image: 1, description: 2, url: 3 });
	}
}
function De(f, n, i) {
	const a = f.slice();
	return (a[1] = n[i]), a;
}
function ze(f) {
	let n, i;
	return (
		(n = new Re({
			props: {
				title: f[1].meta.title,
				image: f[1].meta.card,
				url: f[1].path,
				description: f[1].meta.description
			}
		})),
		{
			c() {
				Be(n.$$.fragment);
			},
			l(a) {
				Ue(n.$$.fragment, a);
			},
			m(a, l) {
				qe(n, a, l), (i = !0);
			},
			p(a, l) {
				const _ = {};
				l & 1 && (_.title = a[1].meta.title),
					l & 1 && (_.image = a[1].meta.card),
					l & 1 && (_.url = a[1].path),
					l & 1 && (_.description = a[1].meta.description),
					n.$set(_);
			},
			i(a) {
				i || (ee(n.$$.fragment, a), (i = !0));
			},
			o(a) {
				ue(n.$$.fragment, a), (i = !1);
			},
			d(a) {
				Fe(n, a);
			}
		}
	);
}
function Ze(f) {
	let n,
		i,
		a,
		l,
		_,
		E,
		g,
		k,
		D,
		H,
		z,
		v,
		I,
		O,
		C,
		p,
		M,
		m,
		b,
		V,
		w,
		L,
		x,
		B,
		N,
		G,
		te,
		R,
		ae,
		ne,
		Z,
		se,
		le,
		T,
		J,
		K,
		ie,
		oe,
		q,
		Q,
		F = f[0].projects,
		h = [];
	for (let d = 0; d < F.length; d += 1) h[d] = ze(De(f, F, d));
	const Ne = (d) =>
		ue(h[d], 1, 1, () => {
			h[d] = null;
		});
	return {
		c() {
			(n = r('meta')),
				(i = S()),
				(a = r('main')),
				(l = r('section')),
				(_ = r('h1')),
				(E = r('span')),
				(g = j("Hello, I'm ")),
				(k = r('span')),
				(D = j('Dane Skalski')),
				(H = S()),
				(z = r('a')),
				(v = je('svg')),
				(I = je('path')),
				(O = S()),
				(C = r('div')),
				(p = r('section')),
				(M = r('a')),
				(m = r('h2')),
				(b = j('About')),
				(V = S()),
				(w = r('div')),
				(L = r('p')),
				(x = j(`I am an honors undergraduate student entering my Senior year at Washington State
					University studying Finance and Management Information Systems (MIS).`)),
				(B = S()),
				(N = r('p')),
				(G = j(`I am passionate about exploring financial markets, economics, and cutting-edge
					technologies. I also enjoy working with and learning about computers. Through coursework,
					projects, and self-study, I have developed a solid foundation of knowledge and skills in
					these areas. In particular, I am excited about leveraging data analysis and machine
					learning to drive business decisions.`)),
				(te = S()),
				(R = r('p')),
				(ae =
					j(`Looking ahead, I plan to continue expanding my knowledge and skills in data analysis,
					machine learning, and computer science, with a focus on their applications in finance.
					Ultimately, I strive to contribute to the success of a financial services firm or
					technology company by applying my strong work ethic and analytical mindset.`)),
				(ne = S()),
				(Z = r('p')),
				(se =
					j(`Outside of academics and career aspirations, I enjoy watching movies and television shows,
					playing golf, snowboarding, and staying active.`)),
				(le = S()),
				(T = r('section')),
				(J = r('a')),
				(K = r('h2')),
				(ie = j('Projects')),
				(oe = S()),
				(q = r('div'));
			for (let d = 0; d < h.length; d += 1) h[d].c();
			this.h();
		},
		l(d) {
			const y = Te('svelte-1yxfb8u', document.head);
			(n = c(y, 'META', { name: !0, content: !0 })),
				y.forEach(s),
				(i = P(d)),
				(a = c(d, 'MAIN', {}));
			var u = o(a);
			l = c(u, 'SECTION', { class: !0 });
			var W = o(l);
			_ = c(W, 'H1', { class: !0 });
			var re = o(_);
			E = c(re, 'SPAN', { class: !0 });
			var he = o(E);
			(g = A(he, "Hello, I'm ")), he.forEach(s), (k = c(re, 'SPAN', { class: !0 }));
			var fe = o(k);
			(D = A(fe, 'Dane Skalski')),
				fe.forEach(s),
				re.forEach(s),
				(H = P(W)),
				(z = c(W, 'A', { href: !0 }));
			var _e = o(z);
			v = Ae(_e, 'svg', { viewBox: !0, fill: !0, xmlns: !0, class: !0, 'aria-label': !0 });
			var ve = o(v);
			(I = Ae(ve, 'path', { 'fill-rule': !0, 'clip-rule': !0, d: !0, fill: !0 })),
				o(I).forEach(s),
				ve.forEach(s),
				_e.forEach(s),
				W.forEach(s),
				(O = P(u)),
				(C = c(u, 'DIV', { class: !0 }));
			var X = o(C);
			p = c(X, 'SECTION', { class: !0, id: !0 });
			var Y = o(p);
			M = c(Y, 'A', { href: !0 });
			var me = o(M);
			m = c(me, 'H2', {});
			var ge = o(m);
			(b = A(ge, 'About')),
				ge.forEach(s),
				me.forEach(s),
				(V = P(Y)),
				(w = c(Y, 'DIV', { class: !0 }));
			var U = o(w);
			L = c(U, 'P', { class: !0 });
			var pe = o(L);
			(x = A(
				pe,
				`I am an honors undergraduate student entering my Senior year at Washington State
					University studying Finance and Management Information Systems (MIS).`
			)),
				pe.forEach(s),
				(B = P(U)),
				(N = c(U, 'P', { class: !0 }));
			var ye = o(N);
			(G = A(
				ye,
				`I am passionate about exploring financial markets, economics, and cutting-edge
					technologies. I also enjoy working with and learning about computers. Through coursework,
					projects, and self-study, I have developed a solid foundation of knowledge and skills in
					these areas. In particular, I am excited about leveraging data analysis and machine
					learning to drive business decisions.`
			)),
				ye.forEach(s),
				(te = P(U)),
				(R = c(U, 'P', { class: !0 }));
			var Ie = o(R);
			(ae = A(
				Ie,
				`Looking ahead, I plan to continue expanding my knowledge and skills in data analysis,
					machine learning, and computer science, with a focus on their applications in finance.
					Ultimately, I strive to contribute to the success of a financial services firm or
					technology company by applying my strong work ethic and analytical mindset.`
			)),
				Ie.forEach(s),
				(ne = P(U)),
				(Z = c(U, 'P', { class: !0 }));
			var we = o(Z);
			(se = A(
				we,
				`Outside of academics and career aspirations, I enjoy watching movies and television shows,
					playing golf, snowboarding, and staying active.`
			)),
				we.forEach(s),
				U.forEach(s),
				Y.forEach(s),
				(le = P(X)),
				(T = c(X, 'SECTION', { class: !0, id: !0 }));
			var $ = o(T);
			J = c($, 'A', { href: !0 });
			var Ee = o(J);
			K = c(Ee, 'H2', {});
			var be = o(K);
			(ie = A(be, 'Projects')),
				be.forEach(s),
				Ee.forEach(s),
				(oe = P($)),
				(q = c($, 'DIV', { class: !0 }));
			var ke = o(q);
			for (let ce = 0; ce < h.length; ce += 1) h[ce].l(ke);
			ke.forEach(s), $.forEach(s), X.forEach(s), u.forEach(s), this.h();
		},
		h() {
			(document.title = 'Dane Skalski - Portfolio'),
				t(n, 'name', 'description'),
				t(n, 'content', 'Portfolio website showcasing my work.'),
				t(E, 'class', 'hero__heading_top svelte-1d3oniu'),
				t(k, 'class', 'hero__heading_bottom svelte-1d3oniu'),
				t(_, 'class', 'hero__heading svelte-1d3oniu'),
				t(I, 'fill-rule', 'evenodd'),
				t(I, 'clip-rule', 'evenodd'),
				t(
					I,
					'd',
					'M20 2.5C20.3315 2.5 20.6495 2.6317 20.8839 2.86612C21.1183 3.10054 21.25 3.41848 21.25 3.75V33.2325L29.115 25.365C29.3497 25.1303 29.6681 24.9984 30 24.9984C30.3319 24.9984 30.6503 25.1303 30.885 25.365C31.1197 25.5997 31.2516 25.9181 31.2516 26.25C31.2516 26.5819 31.1197 26.9003 30.885 27.135L20.885 37.135C20.7689 37.2514 20.6309 37.3438 20.4791 37.4068C20.3272 37.4698 20.1644 37.5022 20 37.5022C19.8356 37.5022 19.6728 37.4698 19.5209 37.4068C19.369 37.3438 19.2311 37.2514 19.115 37.135L9.11499 27.135C8.88028 26.9003 8.74841 26.5819 8.74841 26.25C8.74841 25.9181 8.88028 25.5997 9.11499 25.365C9.34971 25.1303 9.66805 24.9984 9.99999 24.9984C10.3319 24.9984 10.6503 25.1303 10.885 25.365L18.75 33.2325V3.75C18.75 3.41848 18.8817 3.10054 19.1161 2.86612C19.3505 2.6317 19.6685 2.5 20 2.5V2.5Z'
				),
				t(I, 'fill', 'white'),
				t(v, 'viewBox', '0 0 40 40'),
				t(v, 'fill', 'none'),
				t(v, 'xmlns', 'http://www.w3.org/2000/svg'),
				t(v, 'class', 'hero__down-arrow svelte-1d3oniu'),
				t(v, 'aria-label', 'down arrow'),
				t(z, 'href', '#about'),
				t(l, 'class', 'hero svelte-1d3oniu'),
				t(M, 'href', '/#about'),
				t(L, 'class', 'svelte-1d3oniu'),
				t(N, 'class', 'svelte-1d3oniu'),
				t(R, 'class', 'svelte-1d3oniu'),
				t(Z, 'class', 'svelte-1d3oniu'),
				t(w, 'class', 'about__blurb svelte-1d3oniu'),
				t(p, 'class', 'about svelte-1d3oniu'),
				t(p, 'id', 'about'),
				t(J, 'href', '/#projects'),
				t(q, 'class', 'projects__items content svelte-1d3oniu'),
				t(T, 'class', 'projects svelte-1d3oniu'),
				t(T, 'id', 'projects'),
				t(C, 'class', 'non-hero-container svelte-1d3oniu');
		},
		m(d, y) {
			e(document.head, n),
				de(d, i, y),
				de(d, a, y),
				e(a, l),
				e(l, _),
				e(_, E),
				e(E, g),
				e(_, k),
				e(k, D),
				e(l, H),
				e(l, z),
				e(z, v),
				e(v, I),
				e(a, O),
				e(a, C),
				e(C, p),
				e(p, M),
				e(M, m),
				e(m, b),
				e(p, V),
				e(p, w),
				e(w, L),
				e(L, x),
				e(w, B),
				e(w, N),
				e(N, G),
				e(w, te),
				e(w, R),
				e(R, ae),
				e(w, ne),
				e(w, Z),
				e(Z, se),
				e(C, le),
				e(C, T),
				e(T, J),
				e(J, K),
				e(K, ie),
				e(T, oe),
				e(T, q);
			for (let u = 0; u < h.length; u += 1) h[u] && h[u].m(q, null);
			Q = !0;
		},
		p(d, [y]) {
			if (y & 1) {
				F = d[0].projects;
				let u;
				for (u = 0; u < F.length; u += 1) {
					const W = De(d, F, u);
					h[u]
						? (h[u].p(W, y), ee(h[u], 1))
						: ((h[u] = ze(W)), h[u].c(), ee(h[u], 1), h[u].m(q, null));
				}
				for (We(), u = F.length; u < h.length; u += 1) Ne(u);
				He();
			}
		},
		i(d) {
			if (!Q) {
				for (let y = 0; y < F.length; y += 1) ee(h[y]);
				Q = !0;
			}
		},
		o(d) {
			h = h.filter(Boolean);
			for (let y = 0; y < h.length; y += 1) ue(h[y]);
			Q = !1;
		},
		d(d) {
			s(n), d && s(i), d && s(a), Oe(h, d);
		}
	};
}
function Je(f, n, i) {
	let { data: a } = n;
	return (
		(f.$$set = (l) => {
			'data' in l && i(0, (a = l.data));
		}),
		[a]
	);
}
class Qe extends Me {
	constructor(n) {
		super(), Ve(this, n, Je, Ze, Le, { data: 0 });
	}
}
export { Qe as default };

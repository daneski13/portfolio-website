import {
	S as F,
	i as H,
	s as I,
	k as m,
	C as k,
	a as b,
	l as p,
	m as c,
	D as $,
	h as i,
	c as A,
	n as s,
	b as B,
	E as _,
	F as w,
	q as j,
	r as K,
	G as M,
	y as J,
	z as P,
	A as T,
	H as N,
	I as Q,
	J as U,
	g as L,
	d as S,
	B as V
} from '../chunks/index.45ab08d9.js';
function W(v) {
	let t, a, n, l, o, f, r, e, u, D, h, g, x;
	return {
		c() {
			(t = m('header')),
				(a = m('a')),
				(n = k('svg')),
				(l = k('use')),
				(o = b()),
				(f = m('div')),
				(r = m('a')),
				(e = k('svg')),
				(u = k('use')),
				(D = b()),
				(h = m('a')),
				(g = k('svg')),
				(x = k('use')),
				this.h();
		},
		l(y) {
			t = p(y, 'HEADER', { class: !0 });
			var d = c(t);
			a = p(d, 'A', { class: !0, href: !0, target: !0, rel: !0 });
			var q = c(a);
			n = $(q, 'svg', { version: !0, viewBox: !0, xmlns: !0, 'aria-label': !0, class: !0 });
			var C = c(n);
			(l = $(C, 'use', { href: !0 })),
				c(l).forEach(i),
				C.forEach(i),
				q.forEach(i),
				(o = A(d)),
				(f = p(d, 'DIV', { class: !0 }));
			var E = c(f);
			r = p(E, 'A', { href: !0, target: !0, rel: !0, 'aria-label': !0 });
			var G = c(r);
			e = $(G, 'svg', { class: !0, viewBox: !0, xmlns: !0 });
			var O = c(e);
			(u = $(O, 'use', { href: !0 })),
				c(u).forEach(i),
				O.forEach(i),
				G.forEach(i),
				(D = A(E)),
				(h = p(E, 'A', { href: !0, target: !0, rel: !0, 'aria-label': !0 }));
			var R = c(h);
			g = $(R, 'svg', { class: !0, viewBox: !0, xmlns: !0 });
			var z = c(g);
			(x = $(z, 'use', { href: !0 })),
				c(x).forEach(i),
				z.forEach(i),
				R.forEach(i),
				E.forEach(i),
				d.forEach(i),
				this.h();
		},
		h() {
			s(l, 'href', '/logo.svg#logo'),
				s(n, 'version', '1.1'),
				s(n, 'viewBox', '0 0 55 20'),
				s(n, 'xmlns', 'http://www.w3.org/2000/svg'),
				s(n, 'aria-label', 'Logo, Dane Skalski'),
				s(n, 'class', 'svelte-pfksif'),
				s(a, 'class', 'header__logo svelte-pfksif'),
				s(a, 'href', '/'),
				s(a, 'target', '_self'),
				s(a, 'rel', 'index'),
				s(u, 'href', '/linkedin.svg#linkedin'),
				s(e, 'class', 'header__socials__link svelte-pfksif'),
				s(e, 'viewBox', '0 0 40 40'),
				s(e, 'xmlns', 'http://www.w3.org/2000/svg'),
				s(r, 'href', 'https://www.linkedin.com/in/dane-skalski/'),
				s(r, 'target', '_blank'),
				s(r, 'rel', 'noreferrer noopener external'),
				s(r, 'aria-label', 'Link to my LinkedIn Account'),
				s(x, 'href', '/github.svg#github'),
				s(g, 'class', 'header__socials__link svelte-pfksif'),
				s(g, 'viewBox', '0 0 40 40'),
				s(g, 'xmlns', 'http://www.w3.org/2000/svg'),
				s(h, 'href', 'https://github.com/Daneski13'),
				s(h, 'target', '_blank'),
				s(h, 'rel', 'noreferrer noopener external'),
				s(h, 'aria-label', 'Link to my Github Account'),
				s(f, 'class', 'header__socials svelte-pfksif'),
				s(t, 'class', 'header svelte-pfksif');
		},
		m(y, d) {
			B(y, t, d),
				_(t, a),
				_(a, n),
				_(n, l),
				_(t, o),
				_(t, f),
				_(f, r),
				_(r, e),
				_(e, u),
				_(f, D),
				_(f, h),
				_(h, g),
				_(g, x);
		},
		p: w,
		i: w,
		o: w,
		d(y) {
			y && i(t);
		}
	};
}
class X extends F {
	constructor(t) {
		super(), H(this, t, null, W, I, {});
	}
}
function Y(v) {
	let t, a, n;
	return {
		c() {
			(t = m('footer')), (a = m('p')), (n = j('© 2023 Dane Skalski')), this.h();
		},
		l(l) {
			t = p(l, 'FOOTER', { class: !0 });
			var o = c(t);
			a = p(o, 'P', { class: !0 });
			var f = c(a);
			(n = K(f, '© 2023 Dane Skalski')), f.forEach(i), o.forEach(i), this.h();
		},
		h() {
			s(a, 'class', 'footer__copyright svelte-1ny2ba7'), s(t, 'class', 'footer svelte-1ny2ba7');
		},
		m(l, o) {
			B(l, t, o), _(t, a), _(a, n);
		},
		p: w,
		i: w,
		o: w,
		d(l) {
			l && i(t);
		}
	};
}
class Z extends F {
	constructor(t) {
		super(), H(this, t, null, Y, I, {});
	}
}
function ee(v) {
	let t, a, n, l, o;
	t = new X({});
	const f = v[1].default,
		r = M(f, v, v[0], null);
	return (
		(l = new Z({})),
		{
			c() {
				J(t.$$.fragment), (a = b()), r && r.c(), (n = b()), J(l.$$.fragment);
			},
			l(e) {
				P(t.$$.fragment, e), (a = A(e)), r && r.l(e), (n = A(e)), P(l.$$.fragment, e);
			},
			m(e, u) {
				T(t, e, u), B(e, a, u), r && r.m(e, u), B(e, n, u), T(l, e, u), (o = !0);
			},
			p(e, [u]) {
				r && r.p && (!o || u & 1) && N(r, f, e, e[0], o ? U(f, e[0], u, null) : Q(e[0]), null);
			},
			i(e) {
				o || (L(t.$$.fragment, e), L(r, e), L(l.$$.fragment, e), (o = !0));
			},
			o(e) {
				S(t.$$.fragment, e), S(r, e), S(l.$$.fragment, e), (o = !1);
			},
			d(e) {
				V(t, e), e && i(a), r && r.d(e), e && i(n), V(l, e);
			}
		}
	);
}
function te(v, t, a) {
	let { $$slots: n = {}, $$scope: l } = t;
	return (
		(v.$$set = (o) => {
			'$$scope' in o && a(0, (l = o.$$scope));
		}),
		[l, n]
	);
}
class ae extends F {
	constructor(t) {
		super(), H(this, t, te, ee, I, {});
	}
}
export { ae as default };

import {
	S as re,
	i as le,
	s as ne,
	x as Z,
	k as _,
	a as q,
	q as w,
	y as x,
	M as oe,
	l as d,
	h as n,
	c as P,
	m as h,
	r as I,
	z as ce,
	n as c,
	L as ie,
	E as e,
	b as K,
	A as ee,
	d as te,
	f as _e,
	g as ae,
	B as se,
	F as de,
	v as fe
} from '../chunks/index.45ab08d9.js';
function ue(l) {
	let a, i, f, u, s;
	return {
		c() {
			(a = _('p')), (i = _('b')), (f = w('Updated:')), (u = q()), (s = w(l[4])), this.h();
		},
		l(o) {
			a = d(o, 'P', { class: !0 });
			var m = h(a);
			i = d(m, 'B', {});
			var g = h(i);
			(f = I(g, 'Updated:')), g.forEach(n), (u = P(m)), (s = I(m, l[4])), m.forEach(n), this.h();
		},
		h() {
			c(a, 'class', 'project__meta__date svelte-1nyjqza');
		},
		m(o, m) {
			K(o, a, m), e(a, i), e(i, f), e(a, u), e(a, s);
		},
		p: de,
		d(o) {
			o && n(a);
		}
	};
}
function me(l) {
	let a, i, f, u, s, o, m, g, E, M, V, p, z, $, B, L, N, T, F, H, v, R, J, A, t, S;
	document.title = a = l[1] + ' - Projects';
	let j = l[3] && ue(l);
	var k = l[0];
	function O(r) {
		return {};
	}
	return (
		k && (t = Z(k, O())),
		{
			c() {
				(i = _('meta')),
					(f = q()),
					(u = _('main')),
					(s = _('article')),
					(o = _('img')),
					(g = q()),
					(E = _('h1')),
					(M = w(l[1])),
					(V = q()),
					(p = _('div')),
					(z = _('span')),
					($ = _('p')),
					(B = _('b')),
					(L = w('Published:')),
					(N = q()),
					(T = w(l[2])),
					(F = q()),
					j && j.c(),
					(H = q()),
					(v = _('a')),
					(R = w('View Project')),
					(J = q()),
					(A = _('div')),
					t && x(t.$$.fragment),
					this.h();
			},
			l(r) {
				const b = oe('svelte-15rlul0', document.head);
				(i = d(b, 'META', { name: !0, content: !0 })),
					b.forEach(n),
					(f = P(r)),
					(u = d(r, 'MAIN', {}));
				var U = h(u);
				s = d(U, 'ARTICLE', { class: !0 });
				var y = h(s);
				(o = d(y, 'IMG', { class: !0, src: !0, alt: !0 })),
					(g = P(y)),
					(E = d(y, 'H1', { class: !0 }));
				var Q = h(E);
				(M = I(Q, l[1])), Q.forEach(n), (V = P(y)), (p = d(y, 'DIV', { class: !0 }));
				var C = h(p);
				z = d(C, 'SPAN', {});
				var D = h(z);
				$ = d(D, 'P', { class: !0 });
				var G = h($);
				B = d(G, 'B', {});
				var W = h(B);
				(L = I(W, 'Published:')),
					W.forEach(n),
					(N = P(G)),
					(T = I(G, l[2])),
					G.forEach(n),
					(F = P(D)),
					j && j.l(D),
					D.forEach(n),
					(H = P(C)),
					(v = d(C, 'A', { class: !0, href: !0, target: !0, rel: !0 }));
				var X = h(v);
				(R = I(X, 'View Project')),
					X.forEach(n),
					C.forEach(n),
					(J = P(y)),
					(A = d(y, 'DIV', { class: !0 }));
				var Y = h(A);
				t && ce(t.$$.fragment, Y), Y.forEach(n), y.forEach(n), U.forEach(n), this.h();
			},
			h() {
				c(i, 'name', 'description'),
					c(i, 'content', l[6]),
					c(o, 'class', 'project__cover-img svelte-1nyjqza'),
					ie(o.src, (m = l[5])) || c(o, 'src', m),
					c(o, 'alt', 'Article cover'),
					c(E, 'class', 'project__title svelte-1nyjqza'),
					c($, 'class', 'project__meta__date svelte-1nyjqza'),
					c(v, 'class', 'project__meta__source svelte-1nyjqza'),
					c(v, 'href', l[7]),
					c(v, 'target', '_blank'),
					c(v, 'rel', 'external'),
					c(p, 'class', 'project__meta svelte-1nyjqza'),
					c(A, 'class', 'project__content'),
					c(s, 'class', 'project svelte-1nyjqza');
			},
			m(r, b) {
				e(document.head, i),
					K(r, f, b),
					K(r, u, b),
					e(u, s),
					e(s, o),
					e(s, g),
					e(s, E),
					e(E, M),
					e(s, V),
					e(s, p),
					e(p, z),
					e(z, $),
					e($, B),
					e(B, L),
					e($, N),
					e($, T),
					e(z, F),
					j && j.m(z, null),
					e(p, H),
					e(p, v),
					e(v, R),
					e(s, J),
					e(s, A),
					t && ee(t, A, null),
					(S = !0);
			},
			p(r, [b]) {
				if (
					((!S || b & 2) && a !== (a = r[1] + ' - Projects') && (document.title = a),
					r[3] && j.p(r, b),
					k !== (k = r[0]))
				) {
					if (t) {
						fe();
						const U = t;
						te(U.$$.fragment, 1, 0, () => {
							se(U, 1);
						}),
							_e();
					}
					k
						? ((t = Z(k, O())), x(t.$$.fragment), ae(t.$$.fragment, 1), ee(t, A, null))
						: (t = null);
				}
			},
			i(r) {
				S || (t && ae(t.$$.fragment, r), (S = !0));
			},
			o(r) {
				t && te(t.$$.fragment, r), (S = !1);
			},
			d(r) {
				n(i), r && n(f), r && n(u), j && j.d(), t && se(t);
			}
		}
	);
}
function pe(l, a, i) {
	let { data: f } = a;
	const {
		content: u,
		title: s,
		date: o,
		isUpdated: m,
		updated: g,
		cover: E,
		description: M,
		code: V
	} = f;
	return (
		(l.$$set = (p) => {
			'data' in p && i(8, (f = p.data));
		}),
		[u, s, o, m, g, E, M, V, f]
	);
}
class ve extends re {
	constructor(a) {
		super(), le(this, a, pe, me, ne, { data: 8 });
	}
}
export { ve as default };

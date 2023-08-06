import {
	S as fe,
	i as ue,
	s as me,
	k as r,
	q as u,
	a as p,
	y as ge,
	l,
	m as d,
	r as m,
	h as t,
	c as f,
	z as he,
	L as j,
	n as b,
	b as i,
	E as s,
	A as _e,
	g as be,
	d as ve,
	B as ye
} from './index.45ab08d9.js';
import { A as we } from './Anchor.9f55ae68.js';
function Ce(V) {
	let a;
	return {
		c() {
			a = u('QMK');
		},
		l(c) {
			a = m(c, 'QMK');
		},
		m(c, G) {
			i(c, a, G);
		},
		d(c) {
			c && t(a);
		}
	};
}
function Pe(V) {
	let a,
		c,
		G,
		J,
		n,
		v,
		te,
		z,
		y,
		oe,
		H,
		w,
		se,
		L,
		C,
		ie,
		S,
		P,
		M,
		U,
		T,
		E,
		W,
		x,
		I,
		K,
		X,
		D,
		B,
		Y,
		q,
		A,
		Q,
		g,
		Z,
		h,
		$,
		F,
		k,
		ee,
		N;
	return (
		(h = new we({
			props: {
				href: 'https://github.com/qmk/qmk_firmware',
				rel: 'external',
				$$slots: { default: [Ce] },
				$$scope: { ctx: V }
			}
		})),
		{
			c() {
				(a = r('p')),
					(c = r('strong')),
					(G = u('Technologies:')),
					(J = p()),
					(n = r('p')),
					(v = r('img')),
					(z = p()),
					(y = r('img')),
					(H = p()),
					(w = r('img')),
					(L = p()),
					(C = r('img')),
					(S = p()),
					(P = r('p')),
					(M = r('strong')),
					(U = u('PCB and Circuit Design:')),
					(T = p()),
					(E = r('p')),
					(W = u('KiCad')),
					(x = p()),
					(I = r('p')),
					(K = r('strong')),
					(X = u('3D Modeling:')),
					(D = p()),
					(B = r('p')),
					(Y = u('Blender')),
					(q = p()),
					(A = r('hr')),
					(Q = p()),
					(g = r('p')),
					(Z = u(
						'Junco is a split keyboard powered by Raspberry Pi Picos that I designed from scratch. The schematic and PCB were designed using KiCad and the case was developed in Blender. For firmware, I contributed to the popular open source '
					)),
					ge(h.$$.fragment),
					($ = u(' firmware that is written in C.')),
					(F = p()),
					(k = r('p')),
					(ee = u(
						'In my contribution to QMK, I went above basic support and added custom animations for the RGB lighting.'
					)),
					this.h();
			},
			l(e) {
				a = l(e, 'P', {});
				var o = d(a);
				c = l(o, 'STRONG', {});
				var R = d(c);
				(G = m(R, 'Technologies:')), R.forEach(t), o.forEach(t), (J = f(e)), (n = l(e, 'P', {}));
				var _ = d(n);
				(v = l(_, 'IMG', { src: !0, alt: !0 })),
					(z = f(_)),
					(y = l(_, 'IMG', { src: !0, alt: !0 })),
					(H = f(_)),
					(w = l(_, 'IMG', { src: !0, alt: !0 })),
					(L = f(_)),
					(C = l(_, 'IMG', { src: !0, alt: !0 })),
					_.forEach(t),
					(S = f(e)),
					(P = l(e, 'P', {}));
				var re = d(P);
				M = l(re, 'STRONG', {});
				var le = d(M);
				(U = m(le, 'PCB and Circuit Design:')),
					le.forEach(t),
					re.forEach(t),
					(T = f(e)),
					(E = l(e, 'P', {}));
				var ae = d(E);
				(W = m(ae, 'KiCad')), ae.forEach(t), (x = f(e)), (I = l(e, 'P', {}));
				var ne = d(I);
				K = l(ne, 'STRONG', {});
				var ce = d(K);
				(X = m(ce, '3D Modeling:')), ce.forEach(t), ne.forEach(t), (D = f(e)), (B = l(e, 'P', {}));
				var pe = d(B);
				(Y = m(pe, 'Blender')),
					pe.forEach(t),
					(q = f(e)),
					(A = l(e, 'HR', {})),
					(Q = f(e)),
					(g = l(e, 'P', {}));
				var O = d(g);
				(Z = m(
					O,
					'Junco is a split keyboard powered by Raspberry Pi Picos that I designed from scratch. The schematic and PCB were designed using KiCad and the case was developed in Blender. For firmware, I contributed to the popular open source '
				)),
					he(h.$$.fragment, O),
					($ = m(O, ' firmware that is written in C.')),
					O.forEach(t),
					(F = f(e)),
					(k = l(e, 'P', {}));
				var de = d(k);
				(ee = m(
					de,
					'In my contribution to QMK, I went above basic support and added custom animations for the RGB lighting.'
				)),
					de.forEach(t),
					this.h();
			},
			h() {
				j(
					v.src,
					(te =
						'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white')
				) || b(v, 'src', te),
					b(v, 'alt', 'C'),
					j(
						y.src,
						(oe =
							'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54')
					) || b(y, 'src', oe),
					b(y, 'alt', 'Python'),
					j(
						w.src,
						(se =
							'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white')
					) || b(w, 'src', se),
					b(w, 'alt', 'Git'),
					j(
						C.src,
						(ie =
							'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white')
					) || b(C, 'src', ie),
					b(C, 'alt', 'Visual Studio Code');
			},
			m(e, o) {
				i(e, a, o),
					s(a, c),
					s(c, G),
					i(e, J, o),
					i(e, n, o),
					s(n, v),
					s(n, z),
					s(n, y),
					s(n, H),
					s(n, w),
					s(n, L),
					s(n, C),
					i(e, S, o),
					i(e, P, o),
					s(P, M),
					s(M, U),
					i(e, T, o),
					i(e, E, o),
					s(E, W),
					i(e, x, o),
					i(e, I, o),
					s(I, K),
					s(K, X),
					i(e, D, o),
					i(e, B, o),
					s(B, Y),
					i(e, q, o),
					i(e, A, o),
					i(e, Q, o),
					i(e, g, o),
					s(g, Z),
					_e(h, g, null),
					s(g, $),
					i(e, F, o),
					i(e, k, o),
					s(k, ee),
					(N = !0);
			},
			p(e, [o]) {
				const R = {};
				o & 1 && (R.$$scope = { dirty: o, ctx: e }), h.$set(R);
			},
			i(e) {
				N || (be(h.$$.fragment, e), (N = !0));
			},
			o(e) {
				ve(h.$$.fragment, e), (N = !1);
			},
			d(e) {
				e && t(a),
					e && t(J),
					e && t(n),
					e && t(S),
					e && t(P),
					e && t(T),
					e && t(E),
					e && t(x),
					e && t(I),
					e && t(D),
					e && t(B),
					e && t(q),
					e && t(A),
					e && t(Q),
					e && t(g),
					ye(h),
					e && t(F),
					e && t(k);
			}
		}
	);
}
const Be = {
	title: 'Junco Keyboard',
	date: '2023-04-05',
	card: '/projects/junco-keyboard/card.webp',
	cover: 'https://github.com/Daneski13/Junco/raw/main/img/Junco.webp',
	description: 'Ergonomic split keyboard powered by Raspberry Pi Picos',
	code: 'https://github.com/Daneski13/Junco'
};
class ke extends fe {
	constructor(a) {
		super(), ue(this, a, null, Pe, me, {});
	}
}
export { ke as default, Be as metadata };

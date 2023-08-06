import {
	S as m,
	i as g,
	s as d,
	k as f,
	q as c,
	l as v,
	m as $,
	r as u,
	h as _,
	n as y,
	b as E,
	E as p,
	u as b,
	F as h,
	K as S
} from '../chunks/index.45ab08d9.js';
import { s as q } from '../chunks/singletons.b2fb8dfa.js';
const x = () => {
		const s = q;
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			updated: s.updated
		};
	},
	k = {
		subscribe(s) {
			return x().page.subscribe(s);
		}
	};
function C(s) {
	let e,
		r = s[0].status + '',
		n,
		o,
		i = s[0].error.message + '',
		l;
	return {
		c() {
			(e = f('h1')), (n = c(r)), (o = c(': ')), (l = c(i)), this.h();
		},
		l(a) {
			e = v(a, 'H1', { class: !0 });
			var t = $(e);
			(n = u(t, r)), (o = u(t, ': ')), (l = u(t, i)), t.forEach(_), this.h();
		},
		h() {
			y(e, 'class', 'svelte-1rptoyp');
		},
		m(a, t) {
			E(a, e, t), p(e, n), p(e, o), p(e, l);
		},
		p(a, [t]) {
			t & 1 && r !== (r = a[0].status + '') && b(n, r),
				t & 1 && i !== (i = a[0].error.message + '') && b(l, i);
		},
		i: h,
		o: h,
		d(a) {
			a && _(e);
		}
	};
}
function F(s, e, r) {
	let n;
	return S(s, k, (o) => r(0, (n = o))), [n];
}
let j = class extends m {
	constructor(e) {
		super(), g(this, e, F, C, d, {});
	}
};
export { j as default };

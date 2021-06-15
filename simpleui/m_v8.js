// webpack cannot pack this because it contains natives syntax
// the webpack parser (acorn) does not support natives syntax (eg. %IsSmi)
//
// i think it was the natives calls crashing the tab, not browser es modules, ainf

const m_v8_enabled = false;

function m_v8_IsSmi(x) {
	if (!m_v8_enabled) return true;

	if (x != null && x != undefined && typeof(x) == 'number') { // idk, maybe prevents crashes
		//return %IsSmi(x);
	} else {
		return false;
	}
}

function m_v8_IsValidSmi(x) {
	if (!m_v8_enabled) return true;

	if (x != null && x != undefined && typeof(x) == 'number') { // idk, maybe prevents crashes
		return true; //return %IsValidSmi(x); // is this gone now?
	} else {
		return false;
	}
}

function m_v8_assert_smi(x) {
	if (!m_v8_enabled) return true;
	console.assert(m_v8_IsSmi(x));
	console.assert(m_v8_IsValidSmi(x));
}

function m_v8_HasFastProperties(o) {
	if (!m_v8_enabled) return true;
	if (o != null) {
		//return %HasFastProperties(o);
	} else {
		return false;
	}
}

const m_v8 = {
	IsSmi: m_v8_IsSmi,
	IsValidSmi: m_v8_IsValidSmi,
	assert_smi: m_v8_assert_smi,
	HasFastProperties: m_v8_HasFastProperties,
};
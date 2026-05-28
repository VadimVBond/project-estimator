from app import app
from services.pricing_service import get_pricing_rules
from flask import render_template

with app.test_request_context('/ru/pricing/'):
    rules = get_pricing_rules()
    out = render_template('pricing.html', rules=rules, lang='ru')
    idx = out.find('<section id="pricing"')
    print('FOUND', idx)
    print(out[idx:idx+260])
    print('HAS SECTION-SHOW', 'section-show' in out)

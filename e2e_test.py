import sys
import os
import json
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Add apps/api to path
sys.path.insert(0, os.path.abspath("k:/PROJECTS/Astro/0 GitHub/project-estimator/apps/api"))

from app import app
from services.lead_service import list_leads

def run_tests():

    print("--- Runtime Validation ---")
    client = app.test_client()

    print("\n1. Starting quiz session...")
    # Does quiz have a session start? Let's check routes
    # For now we assume we just generate a lead with a uuid.
    import uuid
    session_id = str(uuid.uuid4())
    
    print("\n2. Submitting Quiz Answers (Simulated by sending state)...")
    # We will submit a lead which normally contains session_id, idempotency_key, and contact.
    # Wait, the lead_service requires the session to exist in quiz_service.
    # Let's import quiz_service and create a session manually to bypass the missing endpoint test
    from services.quiz_service import create_quiz_session, answer_quiz_session, attach_pricing_to_session
    
    session = create_quiz_session("project-estimator-v1")
    real_session_id = session["session_id"]
    print(f"Session created: {real_session_id}")
    
    answer_quiz_session(real_session_id, "landing-page")
    answer_quiz_session(real_session_id, False)
    print("Answers submitted.")
    
    print("\n3. Calculating Pricing (Simulated by setting pricing)...")
    attach_pricing_to_session(real_session_id, {"total": 1500, "currency": "USD"})
    
    print("\n4. Submitting Lead...")
    lead_payload = {
        "session_id": real_session_id,
        "idempotency_key": str(uuid.uuid4()),
        "contact": {
            "name": "Test User",
            "email": "test@example.com"
        }
    }
    
    response = client.post("/api/leads/create", json=lead_payload)
    print(f"Lead creation response status: {response.status_code}")
    print(f"Lead creation response data: {response.json}")
    
    print("\n5. Verifying Lead in DB...")
    leads = list_leads()
    print(f"Total leads in DB: {len(leads)}")
    if leads:
        print(f"Latest lead: {leads[0]['contact']}")
        
    print("\nCheck the console logs above to see if event handlers fired.")

if __name__ == "__main__":
    run_tests()

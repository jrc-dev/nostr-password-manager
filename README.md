# nostr-password-manager

Todos:
- window.nostr to enable signing events
- no account, create one
- one click to fill up forms on site
- different types of item
- generate password with rules
- import from existing password managers
- relay has limits. and different relay has different limit. need to ensure user dont break limits
- for storing secure notes, only store IDs, and each secure note is it own event
- offline support


encryption:


onload:
- prompt user to passcode
- decrypt storage
- display data from storage
- pull from relay
- decrypt data
- check differences and last mod
- sync data
- encrypt data
- push to relay

onchange:

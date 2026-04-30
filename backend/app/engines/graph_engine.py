def get_graph(case_id: str, store: dict) -> dict:
    # FIX 6: SAFE GRAPH RETURN
    if "graphs" not in store:
        store["graphs"] = {}
    if case_id not in store["graphs"]:
        return {"nodes": [], "edges": []}
    return store["graphs"][case_id]

def add_node(case_id: str, account: dict, store: dict):
    # Ensure graphs dictionary exists
    if "graphs" not in store:
        store["graphs"] = {}
    if case_id not in store["graphs"]:
        store["graphs"][case_id] = {"nodes": [], "edges": []}
        
    graph = store["graphs"][case_id]
    account_id = account["account_id"]
    
    # FIX 4: GRAPH NODE DUPLICATION
    if any(n["account_id"] == account_id for n in graph["nodes"]):
        return
        
    graph["nodes"].append({
        "account_id": account_id,
        "status": account.get("status", "active"),
        "balance": float(account.get("current_balance_sim", 0.0))
    })

def add_edge(case_id: str, from_acc: str, to_acc: str, tx_id: str, amount: float, store: dict):
    if "graphs" not in store:
        store["graphs"] = {}
    if case_id not in store["graphs"]:
        store["graphs"][case_id] = {"nodes": [], "edges": []}
        
    graph = store["graphs"][case_id]
    
    if any(e["tx_id"] == tx_id for e in graph["edges"]):
        return
        
    graph["edges"].append({
        "from": from_acc,
        "to": to_acc,
        "tx_id": tx_id,
        "amount": float(amount)
    })

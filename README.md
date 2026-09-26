# Daily Expense Tracker — setup guide

An installable app that works in Chrome on your Mac and your Android phone. Your data is stored on your own devices. Syncing between them goes through one file in **your own** Google Drive or OneDrive.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The whole app |
| `manifest.webmanifest`, `sw.js`, `icon*.png`, `icon.svg` | Let the app be installed and work offline |

## 1. Put the app online (free, one time)

Android can only install the app if it is served over https. The easiest free option is **GitHub Pages**:

1. Create a free account at github.com.
2. Click **New repository**. Name it `expenses` and set it to **Public**. Only the app code is public. Your expense data never goes there.
3. Click **uploading an existing file** and drag in all the files from this folder. Then click **Commit**.
4. Go to **Settings → Pages**. Under Source, choose **Deploy from a branch**, then branch **main**, folder **/ (root)**, and click **Save**.
5. After about a minute your app is live at `https://<your-username>.github.io/expenses/`

*Mac only, no hosting:* double-click `index.html` to open it in Chrome.

## 2. Install it

- **Android (Chrome):** open the link, tap **⋮**, then **Add to Home screen**, then **Install**.
- **Mac (Chrome):** open the link and click the install icon in the address bar. You can also use **⋮ → Cast, save and share → Install page as app**. The app then opens from Launchpad and the Dock.

Use Chrome on the Mac. Safari doesn't support automatic file sync.

## 3. First use

Go to **Budget**. Enter your monthly salary and a budget for each category (you can also split Food into Daily food, Groceries and Online delivery), then tap **Save budget**. Next month reuses the same budget until you change it.

## Profiles (several people on one device)

Tap the name at the top-left (it starts as **Me**) to switch profile or add one. Each profile has its own expenses, salary, budgets and sync file (`expenses-sync-<name>.json`). You can give a profile a 4-digit PIN so others can't open it in the app. The PIN doesn't encrypt the data on the device. Use the **same profile name** on the Mac and the phone so their sync files match.

## 4. Sync between Mac and phone (Google Drive or OneDrive)

**On the Mac (automatic):**
1. Install **Google Drive for desktop** or **OneDrive**, so your drive shows up as a folder in Finder.
2. In the app, go to **Sync & data** and tap **Create new sync file**. Save `expenses-sync.json` inside your Google Drive / OneDrive folder.
3. That's it. From now on the app merges from that file every time it opens and saves back to it after each change. The green dot next to **Sync** means it's linked. If the dot turns amber after a restart, tap **Sync** once to allow access again.

**On Android (one tap each way):**
- **To get your Mac's entries:** tap **Merge from Drive file…**, then choose Drive and `expenses-sync.json`.
- **To send your phone's entries:** tap **Save sync file to Drive…**, then choose Drive. Save it in the same folder and replace the old file if Drive asks.

Syncing always **merges**. Entries from both devices are combined. If the same entry was edited on both, the newer edit wins. Deleted entries stay deleted. Nothing is lost if you sync in either order.

## Features

- **Categories:** Food (Breakfast, Lunch, Dinner, Coffee/Drinks), Travel, Temple, Entertainment, Medical, Laundry, Shopping, Monthly Rent, AC bill, Money sent home, Miscellaneous (with a reason), Refunds.
- **Average daily spending:** shown for every category and every meal. The app also shows an overall average and a "daily living" average that leaves out rent and money sent home.
- **Budgets:** each category shows its budget, what's left, and how much you can spend per day for the rest of the month. Refunds are taken off the category you choose (e.g. an insurance claim off Medical), so budgets are measured after refunds.
- **Salary:** shows how much salary is left (your potential saving) and what % of your salary you've spent.
- **Money sent home:** fetches that day's SGD→INR rate. Type either the SGD or the INR amount and the other is calculated. You can edit the rate to match your transfer.
- **Monthly analysis:** insights, spending by category, a daily spending chart, budget vs actual, a month-end projection, and 6 months of spent vs saved with your savings rate.
- **Export:** CSV files that open in Excel or Google Sheets.

## Updating the app later

Replace `index.html` on GitHub, and increase the number in `expenses-v5` inside `sw.js` (e.g. to `expenses-v6`) so your phone picks up the new version. Your data isn't affected.

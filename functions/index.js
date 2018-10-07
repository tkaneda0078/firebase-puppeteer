'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const puppeteer = require('puppeteer')
const delay = require('delay')

admin.initializeApp(functions.config().firebase)

exports.scraping = functions.https.onRequest(async (request, response) => {
  let madiaName = request.query.media
  let category = request.query.category

  // todo メディア情報保持
  // メディア情報を取得
  // let media = config.get(`Media.${mediaName}`)
  let url = media.url + category

  try {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto(url)

    // 各詳細ページのURLを取得
    // const data = await page.evaluate(selector => {
    //   return Array.from(document.querySelectorAll(selector))
    //     .map(a => a.href)
    // }, selectors.a)
  } catch (err) {
    console.log(err)
    response.status(500).send(err)
  }
  await browser.close()
})

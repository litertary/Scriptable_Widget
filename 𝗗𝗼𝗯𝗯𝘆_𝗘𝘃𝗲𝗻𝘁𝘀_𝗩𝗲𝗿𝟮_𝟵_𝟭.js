// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: socks;
// 📵🚫🚫 이 사이는 수정하지 마시오 📵🚫🚫

// FileManager
let fm = FileManager.iCloud()
let path = fm.documentsDirectory()+"/"

// 📵🚫🚫 📵🚫🚫 📵🚫🚫 📵🚫🚫 📵🚫🚫

// 🧦𝗗𝗼𝗯𝗯𝘆 𝗶𝘀 𝗙𝗿𝗲𝗲 𝗪𝗶𝗱𝗴𝗲𝘁 𝟮.𝟵.𝟭 𝘃𝗲𝗿𝘀𝗶𝗼𝗻
// 🧙‍♀️🦉🐈𝙷𝚊𝚛𝚛𝚢 𝙻 𝙿𝚘𝚝𝚝𝚎𝚛 
// 원본 위젯 이름 : events & reminder (Tiberiu)
// 🪧📅✨ 위젯에 수정사항이 많고 이름을 편하게 부르고자
// 📱✅🔖 도비 위젯으로 명명하였습니다! 

// 설명을 보면서 큰 따옴표 안의 내용 또는 숫자를 바꾸면
// 위젯의 설정을 싑게 변경할 수 있도록 위쪽으로 설정사항을
// 배치두었습니다! 

// ❤️초기 설정 시, 📅캘린더와 ✅리마인더의 이름을 넣어야 
// 📅해당 캘린더와 ✅리마인더의 일정을 가져옵니다

// ❤️🧡💛💚💙💜행복한 위젯 생활 되세요 :)

// 🧦📱🪧🔖 위젯 설정사항 ✊🏻📅💌✨

// 📱📱🪧📋 배경화면 모드 선택 
const bgMode = "image"
// "color" 컬러 지정 
// "image" 이미지 지정 
// ✨✨𝙎𝙘𝙧𝙞𝙥𝙩𝙖𝙗𝙡𝙚 앱에서 북마크 지정한 이미지 이름
const bgname = "green"
// ✨✨ 원하는 배경 색상 
// #ffffff = 화이트, #000000 = 블랙
const BACKGROUND_COLOR = new Color("#000000")

// 📱📱📱 미리보기 지원
const TEST_MODE = true

// 🪧📱🖥 미리보기 사이즈 (미디엄 라지 수정)
const Mode_size = "Medium" // Medium Large


// 📱📱📱🔖✊🏻✋🏻🤚🏻 위젯 모드 설정
const mode = "normal" // normal right left
// ✊🏻 "normal" : 일정 아래 날짜
// ▐ 은행 업무
//   08/19(월) 10:00-11:00
// ▐ 병원 방문
//   08/21(수) 14:00-15:00

// 🤚🏻 "right" 왼쪽에 일정 이름, 오른쪽 날짜
//  ▐ 은행 업무   08/19(월) 10:00-11:00 
//  ▐ 병원 방문   08/21(수) 14:00-15:00  

// ✋🏻 "left" 왼쪽에 날짜, 오른쪽에 일정 이름
//   08/19(월) 10:00-11:00  ▐ 은행 업무
//   08/21(수) 14:00-15:00  ▐ 병원 방문


// ✊🏻노말 모드 지원 옵션 
const normalOption = "bothReminders"

// ↘️옵션 1) "leftAlign" 왼쪽에 모든 일정 순서대로 

// ↔️옵션 2) "divideEvents" 왼쪽에 일정, 오른쪽에 리마인더

// 📜🔖지나간 리마인더 옵션 
// ⬅️옵션 3) "leftPast" 왼쪽에 지나간 리마인더 따로 보기
// ➡️옵션 4) "rightPast" 오른쪽에 지나간 리마인더 따로 보기
// 지나간 리마인더 옵션은 미디움 사이즈에서 
// 고정으로 좌우 4개씩 나오도록 설정되어 있습니다 

// ✅옵션 5) "bothReminders" 양쪽 리마인더
// 왼쪽에 원하는 리마인더, 오른쪽에 원하는 리마인더가
// 나오도록 각각 설정할 수 있는 옵션
// [예] 왼쪽 "개인" 리마인더가 나오고, 오른쪽 "업무" 나오도록
// 리마인더 설정은 
// 🚫LEFT_REMINDERS는 노말 모드의 "bothReminders"
// 옵션에서 작동됩니다. 왼쪽에 나올 리마인더 이름을 넣어주세요.
const LEFT_REMINDERS = ["📑List"]

// divideEvents or bothReminders 왼쪽 일정 개수
// 미디엄 사이즈는 4개 고정
const leftNum = 9
// divideEvents or bothReminders 오른쪽 일정 개수
// 미디엄 사이즈는 4개 고정
const rightNum = 9

// 🖥⌚️🌸🌟그리팅 관련 설정
const greetingMode = "one"
// "time" 시간대별로 메시지 지정 모드
// "one" 고정 메시지 모드

// 📎⌚️좌측 상단 그리팅 이름
const YOUR_NAME = "헤르미온느"

// ✨🔖 그리팅 텍스트
let Greeting = " ✔︎ TO DO"

// 🖇🔖💌 상단 그리팅 관련
function getGreeting() {

	if (greetingMode == "time") {
	    if (NOW.getHours() < 3) {
        Greeting = Greeting + " 🛌 Time to Sleep.."
    // 3시 ~ 12시 
    } else if (NOW.getHours() < 12) {
        Greeting = Greeting + " ☀️ Your To Do Now!"
    // 12시 ~ 17시
    } else if (NOW.getHours() < 17) {
        Greeting = Greeting + " 🌄Good Afternoon"
    // 17시 ~ 21시
	} else if (NOW.getHours() < 21) {
        Greeting = Greeting + " 🌕Good Evening"
    // 21시 ~ 3시
	} else {
        Greeting = Greeting + " 🌕Are you done?"
    }
	  return YOUR_NAME + Greeting
	
	} else if(greetingMode == "one") {
	  return Greeting
		
	}
 
}


// 🪧💌📋 좌측 상단 메시지 텍스트 크기 & 폰트
const GREETING_SIZE = 13
const GREETING_FONT = "DX유니고딕 70"

// 🔖💌🌸 좌측 상단 메시지 컬러
const GREETING_COLOR = new Color("#ffffff")

// 📅🕔🕖 우측 상단 날짜 텍스트 크기 & 폰트
const DateSize = 13
const DateFont = "DX유니고딕 70"

// 📪📫📬 우측 상단 날짜 텍스트 컬러 
const DATE_COLOR = new Color("#ffffff")

// 🪧🔖🕓 우측 상단 날짜 포맷
const dateFormat = "E d MMM"

// 🌅🌄🌇🌌 날짜 포맷 참고
// 월 : M (1, 2, ... 10, 12)
// MM (01, 02) MMM(1월, 2월...) MMMM MMMMM 
// 일 : d dd 
// 요일 : E EE(월, 화, 수 ...) EEEE EEEEE 


// ✨✨‼️‼️캘린더 이름을 정확하게 넣어야 합니다‼️‼️
// 지나간 일정은 보이지 않습니다
// 🔖📅🪧 표시하고 싶은 캘린더 & 리마인더 이름 넣기 
// 예시 ["Calendar", "Day", "Study", "대한민국 공휴일", dobbyisfree@gmail.com"]
const VISIBLE_CALENDARS = ["Calendar", ""]
// 예시 ["개인", "약속", "할 일", "Reminder"]
const VISIBLE_REMINDERS = ["📋Task", "Reminder", "", ""]


// ✨📅📒일정 눌렀을 때, 열고 싶은 앱 
// 애플 캘린더 해당 일정 날짜 이동으로 기본 설정
const appURL = "calshow:" // 
// ✨📅✅ 리마인더 눌렀을 때, 열고 싶은 앱
const REMINDERS_URL = "x-apple-reminderkit://" 



// ❤️🧡💛💚💙💜 일정 ▐ □ & 일정 이름 컬러 지정 
// 캘린더 색상 설정입니다
const CALENDAR_COLORS = {
    // "캘린더 이름": new Color("원하는 색 코드")
    "Calendar": new Color("#ff9100"),

    "edu": new Color("#3f51b5"), 

    "com": new Color("#e67c73") 

}
const REMINDER_COLORS = {
	"📋Task": new Color("#7bc3fd"),
    "Reminder": new Color("#c8a772"), 
    "": new Color("#afe78e"), 
    "": new Color("#feda6a"),
    "📑List": new Color("#ffcebd")
}
// 📱📅❤️🧡💛💚💙💜 애플 캘린더 색상 코드 
// 빨강색 : #eb5582
// 주황색 : #fdac50
// 노랑색 : #feda6a
// 초록색 : #afe78e
// 파랑색 : #7bc3fd
// 보라색 : #bd77d7
// 갈색 : #c8a772

// 🔖🔖🔖일정 개수 설정 (위젯에 보여지는 일정)
// 미디움 사이즈 4개 기본 설정 
// 너무 많으면 넘칩니다
const NUM_ITEMS_TO_SHOW = 6

// 📅📅🕔 이벤트 기간
const period = 60; // 이벤트 불러올 기간(n일 후)

// 📅🔖✅ 완료하지 못한 리마인더 보이고 싶은 기간
// 기본 설정 1 
// 오늘이 9월 11일이면, 1로 설정했을 때 
// 9월 10일 23시 59분으로 설정 
// 숫자 값에 따라 며칠 전까지 보이기 설정 
// n일 전 리마인더 보이기 
const pastReminder = 19


// 👍🏻👍🏻✅ 모든 일정 끝났을 때 하단에 나오는 텍스트
const NO_ITEMS_MESSAGE = "🧦도비 이즈 프리" 

// 📅👍🏻✅ 하단 텍스트 크기 & 폰트
const finMessageSize = 14
const finMessageFont = "DX유니고딕 70"

// 🪧💛❤️ 하단 텍스트 컬러 
const finMessageColor = new Color("#ffffff")


// 🌅🌄🌇🌌 날짜 포맷 부분 
// 월 : M (1, 2, ... 10, 12)
// MM (01, 02) MMM(1월, 2월...) MMMM MMMMM 
// 일 : d dd 
// 요일 : E EE(월, 화, 수 ...) EEEE EEEEE 

// 일정 포맷
// '1월 1일' 월과 일 붙이고 싶으면 "M월 d일" 과 같이 사용
const eventFormat = "MM/dd(EE) hh:mm"
const eventEndFormat = "hh:mm"
// 올데이 포맷
const AlldayFormat = "MM/dd(EE)"
// 리마인더 포맷 
const reminderFormat = "MM/dd(EE) hh:mm"


// 🗓📆📅 ✊🏻노말 모드 지원✊🏻 
// ㅁ와 ㅣ 일정 아이콘 빼고, 텍스트만 따로 컬러 지정하고 싶을 때
const normalEventColor = "cal"
// "cal" : 캘린더 컬러 설정 따라가기 
// "custom" : 커스텀 컬러 지정하기
// ▐ ✨은행 업무✨ 
//   08/19(월) 10:00-11:00
const ITEM_NAME_COLOR = new Color("#ffffff") 
// ▐ 은행 업무
//   ✨08/19(월) 10:00-11:00✨
// 🕔🕖🕡 일정 날짜 텍스트 컬러 
const ITEM_TIME_COLOR = new Color("#ffffff")


// 📅🪧🔖 일정 폰트 
const eventFont = "DX유니고딕 70"
// 🗓📆📅 일정 크기 
const ITEM_NAME_SIZE = 12
// 🗓📆📅 일정 투명도
const eventOpacity = 0.9

// 🕐🕔🕚 일정 날짜 크기 
const ITEM_TIME_SIZE = 10
// 🪧🏷 일정 날짜 폰트
const ITEM_TIME_FONT = "DX유니고딕 30"
// ⏰💡🤍 일정 날짜 투명도 
const timeOpacity = 0.8



// 📱📱🔳 위젯 '상 좌 하 우' 여백
const top = 8
const leading = 10
const bottom = 8
const trailing = 10

// 🪧🔖✨라지 사이즈일 때 수정사항
// ✋🏻🤚🏻left, right 모드 일정 스택 가로, 세로 크기 설정 
// lStackWidth는 왼쪽 스택으로, 크기를 줄이면
// 오른쪽 날짜 혹은 일정이 왼쪽으로 더 붙습니다
// 개인 폰트, 텍스트 사이즈 설정에 따라 조정해주세요
const lStackWidth = 180
const lStackHeight = 15

const rStackWidth = 140
const rStackHeight = 15




// 📅📵📵 𝘿𝙊𝙉’𝙏 𝙏𝙊𝙐𝘾𝙃 
// INTERNAL CONSTS
const DATE_FORMATTER = new DateFormatter()
DATE_FORMATTER.dateFormat = 'ZZ'
const ALLDAY_FORMATTER = new DateFormatter()

const NOW = new Date()

let tZOffsetSec = (DATE_FORMATTER.string(new Date())/100)*60*60

const oDate = new Date(2001,00,01).getTime(),date = new Date();   
  let diff = ((new Date(date.getFullYear(),date.getMonth(),date.getDate())-oDate)/1000)
  diff=Number(diff)-tZOffsetSec



// If we're running the script normally, go to the set calendar app
if (!config.runsInWidget && !TEST_MODE) {
    const appleDate = new Date('2001/01/01')
    const timestamp = (NOW.getTime() - appleDate.getTime()) / 1000
    const callback = new CallbackURL(CALENDAR_URL + timestamp)
    callback.open()
    Script.complete()
} else { // Otherwise, work on the widget
    
    // Collect events and reminders to show 
    // Store custom objects here with the fields: id, name, startDate, endDate, dateIncludesTime, isReminder, calendarTitle
    let itemsToShow = []
    let rmdrToShow = []
    let eventsToShow = []
    let MyrmdrToShow = []

    // Find future events that aren't all day, aren't canceled, and are part of the calendar list
    let endDate = new Date();
  endDate.setDate(endDate.getDate() + period);
    
    const events = 
//     await CalendarEvent.thisWeek([])
    await CalendarEvent.between(new Date(), endDate)
    
    for (const event of events) {
        if (event.endDate.getTime() > NOW.getTime()
            && VISIBLE_CALENDARS.includes(event.calendar.title)
            && !event.title.startsWith("Canceled:")) {
            itemsToShow.push({
                id: event.identifier,
                name: event.title,
                startDate: event.startDate,
                endDate: event.endDate,
                dateIncludesTime: true,
                isReminder: false,
                calendarTitle: event.calendar.title,
                isAllDay: event.isAllDay,
            })
        }
        if (event.endDate.getTime() > NOW.getTime()
            && VISIBLE_CALENDARS.includes(event.calendar.title)
            && !event.title.startsWith("Canceled:")) {
            eventsToShow.push({
                id: event.identifier,
                name: event.title,
                startDate: event.startDate,
                endDate: event.endDate,
                dateIncludesTime: true,
                isReminder: false,
                calendarTitle: event.calendar.title,
                isAllDay: event.isAllDay,
            })
        }
    }
    
    // Find today's reminders that are part of the reminder list
    // NOTE: all-day reminders have their time set to 00:00 of the same day, but aren't returned with incompleteDueToday...
    let queryStartTime = new Date(NOW)
    queryStartTime.setDate(queryStartTime.getDate() - pastReminder)
    queryStartTime.setHours(23, 59, 59, 0)
    let queryEndTime = new Date(NOW)
    queryEndTime.setHours(23, 59, 59, 0)
    
    
    const reminders = await Reminder.incompleteDueBetween(queryStartTime, endDate)
     
//     const reminders = await Reminder.incompleteDueBetween(queryStartTime, queryEndTime)
    for (const reminder of reminders) {
        if (VISIBLE_REMINDERS.includes(reminder.calendar.title)) {
            itemsToShow.push({
                id: reminder.identifier,
                name: reminder.title,
                startDate: reminder.dueDate,
                endDate: null,
                dateIncludesTime: reminder.dueDateIncludesTime,
                isReminder: true,
                calendarTitle: reminder.calendar.title
            })
        }
        if (VISIBLE_REMINDERS.includes(reminder.calendar.title)) {
            rmdrToShow.push({
                id: reminder.identifier,
                name: reminder.title,
                startDate: reminder.dueDate,
                endDate: null,
                dateIncludesTime: reminder.dueDateIncludesTime,
                isReminder: true,
                calendarTitle: reminder.calendar.title
            })
        }
        if (LEFT_REMINDERS.includes(reminder.calendar.title)) {
            MyrmdrToShow.push({
                id: reminder.identifier,
                name: reminder.title,
                startDate: reminder.dueDate,
                endDate: null,
                dateIncludesTime: reminder.dueDateIncludesTime,
                isReminder: true,
                calendarTitle: reminder.calendar.title
            })
        }
    }
    
    // Sort and truncate them: events / timed reminders, in order, then all-day reminders
    itemsToShow = itemsToShow.sort(sortItems).slice(0, (NUM_ITEMS_TO_SHOW))
    rmdrToShow = rmdrToShow.sort(sortItems).slice(0, rightNum)
    eventsToShow = eventsToShow.sort(sortItems).slice(0, leftNum)
    MyrmdrToShow = MyrmdrToShow.sort(sortItems).slice(0, leftNum)


    // Lay out the widget!
    let widget = new ListWidget()

    if (bgMode == "color") {
    // 🔖위젯 배경색상 지정하기
    widget.backgroundColor = BACKGROUND_COLOR
	
    } else if(bgMode == "image") {
	
	  // 🔖위젯 배경사진 불러오기
      widget.backgroundImage = fm.readImage(fm.bookmarkedPath(bgname))
    }

    

    // Add the top date and greeting
    let topStack = widget.addStack()
    topStack.layoutHorizontally()
    topStack.topAlignContent()
    
    topStack.borderColor = new Color("#00ffff")
    topStack.borderWidth = 0
    // Greeting is left aligned, date is right aligned
    let greetingStack = topStack.addStack()
    let greeting = greetingStack.addText(getGreeting())
    greeting.textColor = GREETING_COLOR
//     greeting.font = Font.lightSystemFont(GREETING_SIZE)
    greeting.font = new Font(GREETING_FONT, GREETING_SIZE)
    greetingStack.borderColor = new Color("#00ffff")
    greetingStack.borderWidth = 0
    
    topStack.addSpacer()
    
    // 📆🗓📅 우측 상단 날짜 표기 방식 바꾸기 
    // mm ee dd ... 
    // 📆🕔 1월 1일(목) 표기는 하단과 같음!
    // "MMM d" + "일 " + "(E)"
    let dateStack = topStack.addStack()
    DATE_FORMATTER.dateFormat = dateFormat
    let topDate = dateStack.addText(DATE_FORMATTER.string(NOW).toUpperCase())
    topDate.textColor = DATE_COLOR
    topDate.font = new Font(DateFont, DateSize)
    

// 🖇🔖💌 상단 메시지 ~ 하단 일정 사이 간격 설정
// const topSpacer = 20
// 폰트와 텍스트 크기에 따라 개인 커스텀
// 🪧✨✨
// 전부 자동 조정으로 설정으로 변경
    // 🪧✨🔖 상단 메시지, 일정 사이 위 아래 간격
    // 미리보기 미디움일 때
    if (Mode_size == "Medium") {
	    widget.addSpacer()
// 		widget.addSpacer(topSpacer)
    } else if (Mode_size == "Large") {
      widget.addSpacer()
      }
    

  // ✊🏻노말 모드 일정이 위에, 날짜가 아래
  if (mode == "normal") {
	
  // If there is at least one item today
   if (itemsToShow.length > 0) {
	  // compareDate() 비교 용도
      let todayDate = new Date()
      let tdyTime = todayDate.getTime()
     if (normalOption == "leftAlign") {
	
      for (i = 0; i < itemsToShow.length; i++) {
          // Add space between events
          if (i != 0) {
             // 일정과 일정 사이 위 아래 간격
             widget.addSpacer(13)
//              widget.addSpacer()
          }
            
          // 아이템 스택 
          let itemStack = widget.addStack()
          itemStack.layoutHorizontally()
//           itemStack.centerAlignContent()
          itemStack.url = getItemUrl(itemsToShow[i])

          // 일정 앞 ㅁ ㅣ 아이콘 넣기
          let itemPrefix = itemStack.addText(formatItemPrefix(itemsToShow[i]))

          //📅📆☀️ 일정 아이콘 폰트&색상 
          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(itemsToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(itemsToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(itemsToShow[i])
            } 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 하나의 일정 이름과 날짜 사이 위 아래 간격
          widget.addSpacer(7)

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = widget.addStack()
          timeStack.layoutHorizontally()
          timeStack.centerAlignContent()
          timeStack.url = getItemUrl(itemsToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(itemsToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity

        } // normalOption leftAlign for
	
     } else if(normalOption == "rightPast") {
	
	   let evntStack = widget.addStack() 
       evntStack.layoutHorizontally()

       let leftStack = evntStack.addStack()
       leftStack.layoutVertically()
       leftStack.borderWidth = 0
       leftStack.borderColor = new Color("#32ff12")

       let rightStack = evntStack.addStack()
       rightStack.layoutVertically()
       rightStack.borderWidth = 0
       rightStack.borderColor = new Color("#78afe6")
       
      let eventsNum = 0

      if(Mode_size == "Medium") {
	  leftStack.size = new Size(160, 120)
	  rightStack.size = new Size(160, 120)
	  eventsNum = 5
	
      } else if(Mode_size == "Large") {
        leftStack.size = new Size(160, 290)
        rightStack.size = new Size(160, 290)
        rightStack.addSpacer()
        leftStack.addSpacer()
        eventsNum = 11
      }

      let lftNum = 0
      for (i = 0; i < itemsToShow.length; i++) {

       // 지나간 일정일 때
	   if (compareDate(itemsToShow[i]) < tdyTime){
	      lftNum += 1
// 	      log(lftNum)
// 	      log(eventsNum)
	      if(lftNum < eventsNum){
	
          // 오른쪽 지난 일정 공백
          rightStack.addSpacer(4)
          log(formatItemName(itemsToShow[i]))
          let RitemStack = rightStack.addStack()
          RitemStack.layoutHorizontally()
//           RitemStack.topAlignContent()
//           RitemStack.centerAlignContent()
          RitemStack.url = getItemUrl(itemsToShow[i])
          RitemStack.borderWidth = 0
          RitemStack.borderColor = new Color("#ffffff")

          let itemPrefix = RitemStack.addText(formatItemPrefix(itemsToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(itemsToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = RitemStack.addText(formatItemName(itemsToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(itemsToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 하나의 일정 이름과 날짜 사이 위 아래 간격
//           rightStack.addSpacer(2)

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = rightStack.addStack()
          timeStack.layoutHorizontally()
          timeStack.centerAlignContent()
          timeStack.url = getItemUrl(itemsToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(itemsToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // lftNum < eventsNum if
	   } // normalOption right compareDate() if
}
      let rgtNum = 0
      for (i = 0; i < itemsToShow.length; i++) {
          // 오늘 이후 일정
	      if (compareDate(itemsToShow[i]) > tdyTime){
	      rgtNum += 1
// 	      log(rgtNum)
	      if(rgtNum < eventsNum){
	      // 왼쪽 현재 일정 공백
          leftStack.addSpacer(4)
//           log("leftStack " + formatItemName(itemsToShow[i]))

          let itemStack = leftStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.centerAlignContent()
          itemStack.url = getItemUrl(itemsToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(itemsToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(itemsToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(itemsToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(itemsToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 하나의 일정 이름과 날짜 사이 위 아래 간격
//           leftStack.addSpacer(2)

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = leftStack.addStack()
          timeStack.layoutHorizontally()
          timeStack.centerAlignContent()
          timeStack.url = getItemUrl(itemsToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(itemsToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // rgtNum < eventsNum if
          } // normalOption right compareDate() if present

      } // pastMode right for(leftStack)

     } else if(normalOption == "leftPast") {
        
       let evntStack = widget.addStack() 
       evntStack.layoutHorizontally()

       let leftStack = evntStack.addStack()
       leftStack.layoutVertically()
       leftStack.borderWidth = 0
       leftStack.borderColor = new Color("#32ff12")

       let rightStack = evntStack.addStack()
       rightStack.layoutVertically()
       rightStack.borderWidth = 0
       rightStack.borderColor = new Color("#78afe6")

      let eventsNum = 0

      if(Mode_size == "Medium") {
	  leftStack.size = new Size(160, 120)
	  rightStack.size = new Size(160, 120)
	  eventsNum = 5
	
      } else if(Mode_size == "Large") {
        leftStack.size = new Size(160, 290)
        rightStack.size = new Size(160, 290)
        rightStack.addSpacer()
        leftStack.addSpacer()
        eventsNum = 11
      }
        
      let lftNum = 0
      for (i = 0; i < itemsToShow.length; i++) {

       // 왼쪽 지나간 리마인더 조건
	   if (compareDate(itemsToShow[i]) < tdyTime){
	      lftNum += 1
	      log(eventsNum)
	      if(lftNum < eventsNum){
          // 왼쪽 지나간 리마인더 공백
          leftStack.addSpacer(4)

          let itemStack = leftStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.topAlignContent()
          itemStack.url = getItemUrl(itemsToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(itemsToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(itemsToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(itemsToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(itemsToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity


          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = leftStack.addStack()
          timeStack.layoutHorizontally()
//           timeStack.centerAlignContent()
          timeStack.url = getItemUrl(itemsToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(itemsToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // lftNum < eventsNum if
	   } // normalOption left compareDate() if
	
      } // normalOption left for
      
      let rgtNum = 0
      for (i = 0; i < itemsToShow.length; i++) {
          // 현재 일정 조건
	      if (compareDate(itemsToShow[i]) > tdyTime){
	      rgtNum += 1
	      log(rgtNum)
	      if(rgtNum < eventsNum){
		  // 왼쪽 현재 일정 공백
          rightStack.addSpacer(4)

          let itemStack = rightStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.centerAlignContent()
          itemStack.url = getItemUrl(itemsToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(itemsToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(itemsToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(itemsToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(itemsToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = rightStack.addStack()
          timeStack.layoutHorizontally()
          timeStack.centerAlignContent()
          timeStack.url = getItemUrl(itemsToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(itemsToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // rgtNum < eventsNum if
          } // normalOption right compareDate() if present

      } // normalOption left for
        
    // normalOption left else if fin
    } else if(normalOption == "divideEvents") {
        
       let evntStack = widget.addStack() 
       evntStack.layoutHorizontally()

       let leftStack = evntStack.addStack()
       leftStack.layoutVertically()
       leftStack.borderWidth = 0
       leftStack.borderColor = new Color("#32ff12")

       let rightStack = evntStack.addStack()
       rightStack.layoutVertically()
       rightStack.borderWidth = 0
       rightStack.borderColor = new Color("#78afe6")

      let eventsNum = 0

      if(Mode_size == "Medium") {
	  leftStack.size = new Size(160, 120)
	  rightStack.size = new Size(160, 120)
	  eventsNum = 5
	
      } else if(Mode_size == "Large") {
        leftStack.size = new Size(160, 290)
        rightStack.size = new Size(160, 290)
        rightStack.addSpacer()
        leftStack.addSpacer()
        eventsNum = 11
      }

      if (itemsToShow.length > 0) {
      let lftNum = 0
      for (i = 0; i < eventsToShow.length; i++) {

	      lftNum += 1
	      log(lftNum)
	      if(lftNum < eventsNum){
          // 리마인더 공백
          leftStack.addSpacer(4)
          
          let itemStack = leftStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.topAlignContent()
          itemStack.url = getItemUrl(eventsToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(eventsToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(eventsToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(eventsToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(eventsToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = leftStack.addStack()
          timeStack.layoutHorizontally()
//           timeStack.centerAlignContent()
          timeStack.url = getItemUrl(eventsToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(eventsToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // lftNum < eventsNum if
	
      } // normalOption left for

      let rgtNum = 0
      for (i = 0; i < rmdrToShow.length; i++) {
	      rgtNum += 1
	      log(rgtNum)
	      if(rgtNum < eventsNum){
		  // 일정 공백
          rightStack.addSpacer(4)

          let itemStack = rightStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.centerAlignContent()
          itemStack.url = getItemUrl(rmdrToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(rmdrToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(rmdrToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(rmdrToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)
            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(rmdrToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = rightStack.addStack()
          timeStack.layoutHorizontally()
          timeStack.centerAlignContent()
          timeStack.url = getItemUrl(rmdrToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(rmdrToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // rgtNum < eventsNum if
      } // normalOption left for

      } // itemsToShow.length > 0 if fin
        
    } else if(normalOption == "bothReminders") {
        
       let evntStack = widget.addStack() 
       evntStack.layoutHorizontally()

       let leftStack = evntStack.addStack()
       leftStack.layoutVertically()
       leftStack.addSpacer()
       leftStack.borderWidth = 0
       leftStack.borderColor = new Color("#32ff12")

       let rightStack = evntStack.addStack()
       rightStack.layoutVertically()
       rightStack.addSpacer()
       rightStack.borderWidth = 0
       rightStack.borderColor = new Color("#78afe6")

      let eventsNum = 0

      if(Mode_size == "Medium") {
	  leftStack.size = new Size(160, 120)
	  rightStack.size = new Size(160, 120)
	  eventsNum = 5
	
      } else if(Mode_size == "Large") {
        leftStack.size = new Size(160, 290)
        rightStack.size = new Size(160, 290)
        rightStack.addSpacer()
        leftStack.addSpacer()
        eventsNum = 11
      }

      if (itemsToShow.length > 0) {
      let lftNum = 0
      for (i = 0; i < MyrmdrToShow.length; i++) {
          lftNum += 1
	      log(lftNum)
	      if(lftNum < eventsNum){
		
          // 왼쪽 리마인더 공백
          leftStack.addSpacer(4)
          
          let itemStack = leftStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.topAlignContent()
          itemStack.url = getItemUrl(MyrmdrToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(MyrmdrToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(MyrmdrToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(MyrmdrToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(MyrmdrToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity


          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = leftStack.addStack()
          timeStack.layoutHorizontally()
//           timeStack.centerAlignContent()
          timeStack.url = getItemUrl(MyrmdrToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(MyrmdrToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // lftNum < eventsNum if
	
      } // normalOption left for

      let rgtNum = 0
      for (i = 0; i < rmdrToShow.length; i++) {
	      rgtNum += 1
	      log(rgtNum)
	      if(rgtNum < eventsNum){

	      log(formatItemName(rmdrToShow[i]))
		  // 일정 공백
          rightStack.addSpacer(4)

          let itemStack = rightStack.addStack()
//           itemStack.layoutHorizontally()
          itemStack.centerAlignContent()
          itemStack.url = getItemUrl(rmdrToShow[i])
          itemStack.borderWidth = 0
          itemStack.borderColor = new Color("#ffffff")

          let itemPrefix = itemStack.addText(formatItemPrefix(rmdrToShow[i]))

          itemPrefix.font = Font.semiboldSystemFont(ITEM_NAME_SIZE)
          // 일정 아이콘 색상
          itemPrefix.textColor = getItemColor(rmdrToShow[i])
          // 일정 아이콘 투명도
          itemPrefix.textOpacity = eventOpacity
	
	      // 일정 이름 넣기
          let itemName = itemStack.addText(formatItemName(rmdrToShow[i]))
          itemName.lineLimit = 1
          // 일정 이름 폰트
          itemName.font = new Font (eventFont, ITEM_NAME_SIZE)

            
          // 노말 모드 지원 - 아이콘과 일정 이름 색상
          if (normalEventColor == "custom") {

	      // 일정 이름 색상 - 지정 값
          itemName.textColor = ITEM_NAME_COLOR
	
          } else if (normalEventColor == "cal") {
	
	        // 일정 이름 색상 - 캘린더 색상 따라가기
            itemName.textColor = getItemColor(rmdrToShow[i])
            } // 노말 모드 지원 색상 

          // 일정 이름 투명도
          itemName.textOpacity = eventOpacity

          // 📎🕓 타임 스택 - 날짜 스택
          let timeStack = rightStack.addStack()
          timeStack.layoutHorizontally()
          timeStack.centerAlignContent()
          timeStack.url = getItemUrl(rmdrToShow[i])

          // 일정 이름에 맞춰서 공백 넣기
          timeStack.addSpacer(12)

          // 날짜 넣기
          let timeDate = timeStack.addText(formatItemDate(rmdrToShow[i]))
          // 날짜 폰트
          timeDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
          // 날짜 컬러
          timeDate.textColor = ITEM_TIME_COLOR
          // 날짜 투명도
          timeDate.textOpacity = timeOpacity
          } // rgtNum < eventsNum if
      } // normalOption left for

      } // itemsToShow.length > 0 if fin
        
      } // normalOption bothReminders else if fin

    } else { // 일정 없을 때
        // 중간에 공백 넣기 
//         widget.addSpacer(100)
        // 🔖 하단 메시지
        let message = widget.addText(NO_ITEMS_MESSAGE)
        message.textColor = finMessageColor
        message.font = new Font(finMessageFont, finMessageSize)
    } 
    
// 📱⭐️⭐️⭐️ 🤚🏻오른쪽 모드
} else if (mode == "right") {
    
        // If there is at least one item today
    if (itemsToShow.length > 0) {
        
        for (i = 0; i < itemsToShow.length; i++) {
            // Add space between events
            if (i != 0) {
                // 일정 위 아래 간격
                widget.addSpacer(9)
            }
            
            // 
            let eventStack = widget.addStack()
            eventStack.layoutHorizontally()
//             eventStack.topAlignContent()


            // 왼쪽 일정 스택
            let itemStack = eventStack.addStack()
            itemStack.layoutVertically()
//             itemStack.centerAlignContent()
//             itemStack.addSpacer()

            itemStack.url = getItemUrl(itemsToShow[i])
//             itemStack.addSpacer(1)
            
            if (Mode_size == "Large") {
            itemStack.size = new Size(lStackWidth, lStackHeight)

            } else itemStack.size = new Size(180, 15)

//             itemStack.borderColor = new Color("#ffffff")
//   itemStack.borderWidth = 0


            // 아이콘 및 일정 추가
            let itemPrefix = itemStack.addText(formatItemPrefix(itemsToShow[i]) + formatItemName(itemsToShow[i]))
            
            //📅📆☀️ 아이콘 및 일정 이름 폰트&색상 
            itemPrefix.font = new Font (eventFont, ITEM_NAME_SIZE)
//             itemPrefix.textColor = ITEM_NAME_COLOR
            itemPrefix.textColor = getItemColor(itemsToShow[i])
            itemPrefix.textOpacity = eventOpacity

            // 오른쪽 날짜 스택
            let rTimeStack = eventStack.addStack()
            rTimeStack.layoutVertically()
//             rTimeStack.centerAlignContent()
            rTimeStack.url = getItemUrl(itemsToShow[i])

            if (Mode_size == "Large") {
            rTimeStack.size = new Size(rStackWidth, rStackHeight)

            } else rTimeStack.size = new Size(140, 15)
//             rTimeStack.borderColor = new Color("#ffff35")
//             rTimeStack.borderWidth = 0
//   rTimeStack.setPadding(0, 0, 0, 0)

            // 🕔📅 날짜, 시간
            let itemDate = rTimeStack.addText(formatItemDate(itemsToShow[i]))
            itemDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
            itemDate.textColor = ITEM_TIME_COLOR

            itemDate.textOpacity = timeOpacity

        } 

    } else { // 일정 없을 때
        // 중간에 공백 넣기 
//         widget.addSpacer(100)
        // 🔖 하단 메시지
        let message = widget.addText(NO_ITEMS_MESSAGE)
        message.textColor = finMessageColor
        message.font = new Font(finMessageFont, finMessageSize)
    } 

// 📱⭐️⭐️⭐️ 🤚🏻왼쪽 모드 - 날짜가 왼쪽
} else if (mode == "left") {
	
	        // If there is at least one item today
    if (itemsToShow.length > 0) {

        
        for (i = 0; i < itemsToShow.length; i++) {
            // Add space between events
            if (i != 0) {
                // 일정 위 아래 간격
                widget.addSpacer(9)
            }
            
            // 
            let eventStack = widget.addStack()
            eventStack.layoutHorizontally()
//             eventStack.topAlignContent()


            let rTimeStack = eventStack.addStack()
            rTimeStack.layoutVertically()
            rTimeStack.url = getItemUrl(itemsToShow[i])
//             rTimeStack.centerAlignContent()
            rTimeStack.size = new Size(lStackWidth, lStackHeight)
//             rTimeStack.borderColor = new Color("#ffff35")
//   rTimeStack.borderWidth = 0
//   rTimeStack.setPadding(0, 0, 0, 0)



            // 🕔📅 날짜, 시간
            let itemDate = rTimeStack.addText(formatItemDate(itemsToShow[i]))
            itemDate.font = new Font(ITEM_TIME_FONT, ITEM_TIME_SIZE)
            itemDate.textColor = ITEM_TIME_COLOR

            itemDate.textOpacity = timeOpacity

            let itemStack = eventStack.addStack()
            itemStack.layoutVertically()
//             itemStack.centerAlignContent()
//             itemStack.addSpacer()


            itemStack.url = getItemUrl(itemsToShow[i])
            itemStack.addSpacer(1)

            itemStack.size = new Size(rStackWidth, rStackHeight)
//             itemStack.borderColor = new Color("#ffffff")
//   itemStack.borderWidth = 0


            
            // 이벤트 아이콘 및 일정
            let itemPrefix = itemStack.addText(formatItemPrefix(itemsToShow[i]) + formatItemName(itemsToShow[i]))
//             let itemPrefix = itemStack.addStack()
            

            //📅📆☀️ 아이콘 및 일정 이름 폰트&색상 
            itemPrefix.font = new Font (eventFont, ITEM_NAME_SIZE)
//             itemPrefix.textColor = ITEM_NAME_COLOR
            itemPrefix.textColor = getItemColor(itemsToShow[i])
            itemPrefix.textOpacity = eventOpacity
//             itemPrefix.leftAlignText()


        } 


    } else { // 일정 없을 때
        // 중간에 공백 넣기 
//         widget.addSpacer(100)
        // 🔖 하단 메시지
        let message = widget.addText(NO_ITEMS_MESSAGE)
        message.textColor = finMessageColor
        message.font = new Font(finMessageFont, finMessageSize)
    } 	
}


        

    // 📱📎🖥 위젯 전체 간격
    // 상 좌 하 우
    widget.setPadding(top, leading, bottom, trailing)

    widget.spacing = -3
    Script.setWidget(widget)
    

    if (Mode_size == "Small") {
    widget.presentSmall()
      
    } else if (Mode_size == "Medium") { 
      widget.presentMedium()
      
    } else if (Mode_size == "Large") { 
      widget.presentLarge()
      
    } 
    Script.complete()
}




function sortItems(first, second) {
    if (first.dateIncludesTime === false && second.dateIncludesTime === false) {
        return 0
    } else if (first.dateIncludesTime === false) {
        return 1
    } else if (second.dateIncludesTime === false) {
        return -1
    } else {
        return first.startDate - second.startDate
    }
}


function formatItemName(item) {
    return item.name
}

function formatItemPrefix(item) {
    if (item.isReminder === false) {
        return "▐ "
    } else {
        return "□ "
    }
}




// 이벤트, 리마인더 포맷팅
function formatItemDate(item) {
    if (item.dateIncludesTime === true) {
        if (item.isReminder === false) {
            DATE_FORMATTER.dateFormat = eventFormat
            ALLDAY_FORMATTER.dateFormat = AlldayFormat;
            
            // "▐ " 올데이 일정
            if (item.isAllDay) {
	
              return "" +  ALLDAY_FORMATTER.string(item.startDate);

            // 기간 일정 
            } else if (item.dateIncludesTime === true) {
              let startDate = DATE_FORMATTER.string(item.startDate)
            DATE_FORMATTER.dateFormat = eventEndFormat
            let endDate = DATE_FORMATTER.string(item.endDate)
            return "" + startDate + "-" + endDate

            }
        } else if (item.dateIncludesTime === true && item.isReminder === true)  {
            DATE_FORMATTER.dateFormat = reminderFormat
            let startDate = DATE_FORMATTER.string(item.startDate)
//             DATE_FORMATTER.dateFormat = "hh:mma"
//             let endTime = DATE_FORMATTER.string(item.endDate)
            // "□ " 
            return "" + startDate
        }
    } else  {
        return "TO DO" // Not a TODO in the code, literally return that
    }
}

function getItemUrl(item) {
    if (item.isReminder === false) {
	
        const nDate = item.startDate.getTime()
        var diff = ((nDate - oDate)/1000)
        diff = Number(diff) - tZOffsetSec
	
        return appURL + diff
// "calshow:" 

// CALENDAR_URL + item.id

    } else {
	
	    const nDate = item.startDate.getTime()
        var diff = ((nDate - oDate)/1000)
        diff = Number(diff) - tZOffsetSec
	
//         return REMINDERS_URL.url = "x-apple-reminderkit://"
        return REMINDERS_URL + item.id
    }
}

function getItemColor(item) {
    if (item.isReminder === true) {
        return REMINDER_COLORS[item.calendarTitle]
    } else {
        return CALENDAR_COLORS[item.calendarTitle]
    }
}


function compareDate(item) {
// 	const date = new Date()
//     DATE_FORMATTER.dateFormat = "MMM d"
	let day = item.startDate
	let evntTime = day.getTime()
// 	let dayString = DATE_FORMATTER.string(day)
	return evntTime
	
}

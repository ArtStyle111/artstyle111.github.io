! function($) {
  (function() {
    try {
      $(function() {
        try {/*
          var e, r, l, a, t, i, n;
          if (r = $(".macros-map"), !r.length) return;
          if (t = !1, a = !1, l = !1, e = !1, r.each(function() {
              try {
                if ("yandex" === $(this).data("service") && (t = !0, l = $('.macros-map[data-service="yandex"]')), "google" === $(this).data("service")) return a = !0, e = $('.macros-map[data-service="google"]')
              } catch (r) {
                error_handler(r, "libs_plp 2", arguments.callee)
              }
            }), n = "", i = "", t && $.getScript(n, function() {
              try {
                if ("undefined" == typeof ymaps) return;
                return ymaps.ready(function() {
                  try {
                    return l.each(function() {
                      try {
                        var e;
                        return e = plp.lazy.add($(this), function(r) {
                          try {
                            var l, a, t, i, n;
                            return l = e.children(".map"), a = l.data("map"), t = _.uniqueId("map"), l.attr("id", t), "roadmap" === a.type && (a.type = "yandex#map"), i = new ymaps.Map(t, {
                              center: a.center,
                              type: a.type,
                              zoom: a.zoom,
                              controls: []
                            }), i.behaviors.disable(["scrollZoom"]), n = new ymaps.GeoObject({
                              geometry: {
                                type: "Point",
                                coordinates: a.point
                              }
                            }, {
                              draggable: !1
                            }), i.geoObjects.add(n), i.controls.add("zoomControl", {
                              "float": "left"
                            }).add("typeSelector", {
                              "float": "right"
                            })
                          } catch (o) {
                            error_handler(o, "libs_plp 6", arguments.callee)
                          }
                        })
                      } catch (r) {
                        error_handler(r, "libs_plp 5", arguments.callee)
                      }
                    })
                  } catch (e) {
                    error_handler(e, "libs_plp 4", arguments.callee)
                  }
                })
              } catch (e) {
                error_handler(e, "libs_plp 3", arguments.callee)
              }
            }), a) return $.getScript(i, function() {
            try {
              if ("undefined" == typeof google) return;
              return e.each(function() {
                try {
                  var e;
                  return e = plp.lazy.add($(this), function(r) {
                    try {
                      var l, a, t, i, n;
                      return l = e.children(".map"), a = l.data("map"), t = _.uniqueId("map"), l.attr("id", t), "yandex#map" === a.type && (a.type = "roadmap"), i = new google.maps.Map(document.getElementById(t), {
                        zoom: a.zoom,
                        center: new google.maps.LatLng(a.center[0], a.center[1]),
                        mapTypeId: a.type,
                        fullscreenControl: !1,
                        rotateControl: !1,
                        streetViewControl: !1,
                        scrollwheel: !1
                      }), n = new google.maps.Marker({
                        position: new google.maps.LatLng(a.point[0], a.point[1]),
                        map: i,
                        draggable: !1
                      })
                    } catch (o) {
                      error_handler(o, "libs_plp 9", arguments.callee)
                    }
                  })
                } catch (r) {
                  error_handler(r, "libs_plp 8", arguments.callee)
                }
              })
            } catch (r) {
              error_handler(r, "libs_plp 7", arguments.callee)
            }
          })
        */} catch (o) {
          error_handler(o, "libs_plp 1", arguments.callee)
        }
      })
    } catch (e) {
      error_handler(e, "libs_plp 0", arguments.callee)
    }
  }).call(this), plp.l10n = function(e, r) {
      try {
        if (r = r || "", "ru" === plp.lang) return e;
        var l = plp.l10n.dictionary.find(function(l) {
          try {
            return l.original === e && l.context === r
          } catch (a) {
            error_handler(a, "libs_plp 1", arguments.callee)
          }
        });
        return l && l[plp.lang] ? l[plp.lang] : (console.error("No translation for ", e), e)
      } catch (a) {
        error_handler(a, "libs_plp 0", arguments.callee)
      }
    }, plp.l10n.dictionary = [{
      original: "Не удалось отправить форму!",
      context: "",
      en: "Error sending form",
      "pt-BR": "Erro ao enviar o formulário",
      es: "Error al enviar el formulario",
      "zh-CN": "发送表格出错",
      de: "Fehler beim Senden des Formulars",
      it: "Errore invio modulo",
      fr: "Erreur lors de l'envoi du formulaire",
      pl: "Nie udało się wysłać formularza",
      lt: "Nepasisekė nusiųsti formą!",
      lv: "Jūsu ziņojums netika nosūtīts!",
      bg: "Неуспешно изпращане на заявката!",
      cs: "Chyba při odesílání formuláře",
      he: "שליחת הטופס נכשלה",
      el: "Η φόρμα δε στάλθηκε",
      am: "Հայտն ուղարկված չէ, խնդրում ենք կրկին փորձել",
      ge: "ფორმა არ გაიგზავნა!",
      ro: "A apărut o eroare la trimiterea formularului",
      kz: "Нысаныңыз жіберілмеді",
      uk: "Помилка надсилання форми"
    }, {
      original: "Неправильно заполнены поля:",
      context: "",
      en: "These fields were not filled in correctly:",
      "pt-BR": "Estes campos não foram preenchidos corretamente:",
      es: "Estos campos no se han rellenado correctamente:",
      "zh-CN": "以下字段未正确填写：",
      de: "Diese Felder wurden nicht korrekt ausgefüllt:",
      it: "Questi campi non sono stati compilati correttamente:",
      fr: "Ces champs n’ont pas été renseignés correctement :",
      pl: "Te pola nie zostały poprawnie wypełnione:",
      lt: "Neteisingai užpildyti laukai:",
      lv: "Lauks nav aizpildīts vai ir aizpildīts nepareizi:",
      bg: "Грешно запълнени полета:",
      cs: "Tato pole nebyla vyplněna správně:",
      he: "השדות הבאים לא מולאו כהלכה:",
      el: "Αυτά τα πεδία δε συμπληρώθηκαν σωστά:",
      am: "Տողերը սխալ են լրացված",
      ge: "შემდეგი ველები არასწორად არის შევსებული:",
      ro: "Aceste câmpuri nu au fost completate corect:",
      kz: "Бұл өрістер дұрыс толтырылмаған:",
      uk: "Ці поля були заповнені неправильно:"
    }, {
      original: "Пожалуйста, повторите отправку через пару секунд.",
      context: "",
      en: "Please try again in a few seconds.",
      "pt-BR": "Tente novamente em alguns segundos.",
      es: "Por favor, inténtelo de nuevo dentro de unos segundos.",
      "zh-CN": "请稍后再试",
      de: "Bitte versuchen Sie es in ein paar Sekunden erneut.",
      it: "Riprova tra pochi secondi.",
      fr: "Veuillez réessayer dans quelques secondes.",
      pl: "Powtórz za parę sekund.",
      lt: "Prašome pakartoti siuntimą po keletą sekundžių.",
      lv: "Lūdzu, nosūtiet atkārtoti pēc dažām sekundēm.",
      bg: "Моля, изпратете отново заявката след няколко секунди.",
      cs: "Prosím zkuste to znovu za pár vteřin.",
      he: "נסה שוב בעוד כמה שניות.",
      el: "Προσπαθήστε ξανά σε μερικά δευτερόλεπτα.",
      am: "Տողերը սխալ են մուտքագրված: Խնդրում ենք կրկին փորձել մի քանի վարկյանից",
      ge: "გაიმეორეთ გაგზავნის",
      ro: "Vă rugăm să încercați din nou peste câteva secunde.",
      kz: "Бірнеше секундтан кейін қайталап көріңіз.",
      uk: "Будь ласка, спробуйте ще раз за кілька секунд."
    }, {
      original: "Поле «%field%» обязательно для заполнения.",
      context: "",
      en: 'The "%field%" field is required.',
      "pt-BR": 'O campo "%field%" é necessário.',
      es: "El campo %field% es obligatorio.",
      "zh-CN": "“%field%” 为必填字段。",
      de: "Das Feld „%field%“ ist ein Pflichtfeld.",
      it: "Il campo «%field%» è obbligatorio.",
      fr: "Vous devez remplir le champ « %field% ».",
      pl: 'Pole "%field%" musi być wypełnione.',
      lt: "Laukas «%field%» būtinas užpildymui.",
      lv: "Lauks «%field%» jāaizpilda obligāti.",
      bg: "Полето «%field%» е задължително за запълване.",
      cs: "Pole „%field%“ je povinné.",
      he: 'השדה "%field%" הוא שדה חובה.',
      el: "Απαιτείται πεδίο «%field%».",
      am: "Խնդրում ենք լրացրեք «%field%» տողը, այն պարտադիր է",
      ge: "ამ ველის «%field%» შევსება აუცილებელია.",
      ro: "Câmpul „%field%” este obligatoriu.",
      kz: '"%field%" өрісін толтыру қажет.',
      uk: "Поле «%field%» є обов'язковим."
    }, {
      original: "Поле «%field%» должно содержать ваш настоящий e-mail адрес.",
      context: "",
      en: 'The "%field%" field must contain your actual email address.',
      "pt-BR": 'O campo "%field%" deve conter o seu endereço de e-mail correto.',
      es: "El campo %field% debe contener su dirección de correo electrónico real.",
      "zh-CN": "“%field%” 字段必须包含真实的电子邮件地址。",
      de: "Das Feld „%field%“ muss Ihre tatsächliche E-Mail Adresse enthalten.",
      it: "Il campo «%field%» deve contenere il tuo indirizzo e-mail.",
      fr: "Le champ « %field% » doit contenir votre adresse e-mail réelle.",
      pl: 'Pole "%field%" musi zawierać Twój adres e-mail.',
      lt: "Laukas «%field%» turi būti nurodytas jūsų esamas email adresas.",
      lv: "Laukā «%field%» jābūt Jūsu īstai e-pasta adresei.",
      bg: "Полето «%field%» трябва да съдържа истинският Ви имейл адрес.",
      cs: "Pole «%field%» musí obsahovat vaši správnou e-mail adresu.",
      he: 'בשדה "%field%" עליך להזין את כתובת הדוא"ל הפעילה שלך.',
      el: "Το πεδίο «%field%» πρέπει να περιλαμβάνει την πραγματική διεύθυνση e-mail σας.",
      am: "Խնդրում ենք «%field%» տողում գրանցել Ձեր իրական էլ. փոստի հասցեն",
      ge: "ეს ველი «%field%» უნდა შეიცავდეს თქვენი ნამდვილი ელ-ფოსტის მისამართს.",
      ro: "Câmpul „%field%” trebuie să conțină adresa dvs. e-mail veridică.",
      kz: '"%field%" өрісінде сіздің нақты э-пошта мекенжайыңыз болуы тиіс.',
      uk: "Поле «%field%» повинно містити вашу справжню електронну поштову адресу."
    }, {
      original: "Поле «%field%» должно содержать правильный номер телефона.",
      context: "",
      en: 'The "%field%" field must contain your correct phone number.',
      "pt-BR": 'O campo "%field%" deve conter um número de telefone válido.',
      es: "El campo %field% debe contener su numero de teléfono correcto.",
      "zh-CN": "“%field%” 字段必须包含有效的手机号码。",
      de: "Das Feld „%field%“ muss Ihre richtige Telefonnummer enthalten.",
      it: "Il campo «%field%» deve contenere il tuo numero di telefono.",
      fr: "Le champ « %field% » doit contenir un numéro de téléphone valide.",
      pl: 'Pole "%field%" musi zawierać prawidłowy numer telefonu.',
      lt: "Laukas «%field%» turi būti teisingai nurodytas telefono numeris.",
      lv: "Laukā «%field%» jānorāda īstais telefona numurs.",
      bg: "Полето «%field%» задължително трябва да съдържа правилният Ви телефонен номер.",
      cs: "Pole «%field%» musí obsahovat vaše správné telefonní číslo.",
      he: 'בשדה "%field%" עליך להזין את מספר הטלפון המדויק שלך.',
      el: "Το πεδίο «%field%» πρέπει να περιέχει τον σωστό αριθμό τηλεφώνου.",
      am: "Խնդրում ենք «%field%» տողում գրանցել Ձեր ճիշտ հեռախոսահամարը",
      ge: "ეს ველი «%field%» უნდა შეიცავდეს რეალურად არსებულ ტელეფონის ნომერს.",
      ro: "Câmpul „%field%” trebuie să conțină numărul dvs. de telefon veridic.",
      kz: '"%field%" өрісінде дұрыс телефон нөмірі болуы тиіс.',
      uk: "Поле «%field%» повинно містити ваш правильний номер телефону."
    }, {
      original: "Поле «%field%» должно быть правильным числом.",
      context: "",
      en: 'The "%field%" field must be an actual number.',
      "pt-BR": 'O campo "%field%" deve conter um número válido.',
      es: "El campo %field% debe ser un número real.",
      "zh-CN": "“%field%” 字段必须包含有效的号码。",
      de: "Das Feld „%field%“ muss eine gültige Zahl sein.",
      it: "Il campo «%field%» deve contenere un numero.",
      fr: "Le champ « %field% » doit être un nombre valide.",
      pl: 'Pole "%field%" musi zawierać właściwy numer.',
      lt: "Laukas «%field%» turu būti nurodytas teisingas skaičius.",
      lv: "Laukā «%field%» jānorāda tikai cipari.",
      bg: "Полето «%field%» трябва да съдържа правилно изписано число.",
      cs: "Pole „%field%“ musí být skutečný počet.",
      he: 'בשדה "%field%" עליך להזין מספר אמיתי.',
      el: "Το πεδίο «%field%» πρέπει να είναι πραγματικός αριθμός.",
      am: "Խնդրում ենք «%field%» տողում գրանցել ճիշտ ամսաթիվ",
      ge: "ამ ველში «%field%» უნდა იყოს სწორი რიცხვი.",
      ro: "Câmpul „%field%” trebuie să conțină un număr real.",
      kz: '"%field%" өрісінде нақты сан болуы тиіс.',
      uk: "Поле «%field%» має бути дійсним числом."
    }, {
      original: "Товар не найден",
      context: "",
      en: "Product not found",
      "pt-BR": "Produto não encontrado",
      es: "Producto no hallado",
      "zh-CN": "未找到产品",
      de: "Produkt nicht gefunden",
      it: "Prodotto non trovato",
      fr: "Produit non trouvé",
      pl: "Nie znaleziono produktu",
      lt: "Товар не найден",
      lv: "Товар не найден",
      bg: "Товар не найден",
      cs: "Produkt nenalezen",
      he: "המוצר לא נמצא",
      el: "Το προϊόν δεν βρέθηκε",
      am: "Товар не найден",
      ge: "Товар не найден",
      ro: "Produsul nu a fost găsit",
      kz: "Өнім табылмады",
      uk: "Продукт не знайдено"
    }, {
      original: "Кнопка должна находиться в карточке товара.",
      context: "",
      en: "The button should be located on the product card.",
      "pt-BR": "O botão deve estar localizado no cartão do produto.",
      es: "El botón debería encontrarse en la tarjeta del producto.",
      "zh-CN": "按钮应该位于产品卡上。",
      de: "Die Schaltfläche sollte sich auf der Produktkarte befinden.",
      it: "Il pulsante dovrebbe trovarsi sulla scheda del prodotto.",
      fr: "Le bouton devrait se trouver sur la fiche produit.",
      pl: "Przycisk powinien znajdować się na karcie produktu.",
      lt: "Кнопка должна находиться в карточке товара.",
      lv: "Кнопка должна находиться в карточке товара.",
      bg: "Кнопка должна находиться в карточке товара.",
      cs: "Tlačítko by se mělo nacházet na kartě produktu.",
      he: "הלחצן אמור להופיע בכרטיס המוצר.",
      el: "Το κουμπί πρέπει να βρίσκεται στην καρτέλα προϊόντος.",
      am: "Кнопка должна находиться в карточке товара.",
      ge: "Кнопка должна находиться в карточке товара.",
      ro: "Butonul ar trebui să fie amplasat pe cardul produsului.",
      kz: "Түйме өнім карточкасында орналасуы тиіс.",
      uk: "Кнопка має бути розташована на картці продукту."
    }, {
      original: "Количество",
      context: "",
      en: "Quantity",
      "pt-BR": "Quantidade",
      es: "Cantidad",
      "zh-CN": "数量",
      de: "Menge",
      it: "Quantità",
      fr: "Quantité",
      pl: "Ilość",
      lt: "Количество",
      lv: "Количество",
      bg: "Количество",
      cs: "Množství",
      he: "כמות",
      el: "Ποσότητα",
      am: "Количество",
      ge: "Количество",
      ro: "Cantitate",
      kz: "Саны",
      uk: "Кількість"
    }, {
      original: "Добавлено в корзину!",
      context: "",
      en: "Added to cart!",
      "pt-BR": "Adicionado ao carrinho!",
      es: "¡Se ha añadido al carrito!",
      "zh-CN": "已加至购物车！",
      de: "Zum Warenkorb hinzugefügt!",
      it: "Aggiunto al carrello!",
      fr: "Ajouté au panier !",
      pl: "Dodano do koszyka!",
      lt: "Добавлено в корзину!",
      lv: "Добавлено в корзину!",
      bg: "Добавлено в корзину!",
      cs: "Přidáno do košíku!",
      he: "נוסף לעגלה!",
      el: "Προστέθηκε στο καλάθι!",
      am: "Добавлено в корзину!",
      ge: "Добавлено в корзину!",
      ro: "Adăugat în coș!",
      kz: "Себетке қосылды!",
      uk: "Додано до кошику!"
    }, {
      original: "ОК",
      context: "",
      en: "OK",
      "pt-BR": "OK",
      es: "Vale",
      "zh-CN": "确定",
      de: "OK",
      it: "OK",
      fr: "OK",
      pl: "OK",
      lt: "OK",
      lv: "OK",
      bg: "OK",
      cs: "OK",
      he: "אישור",
      el: "ΟΚ",
      am: "OK",
      ge: "OK",
      ro: "Ok",
      kz: "OK",
      uk: "ОК"
    }, {
      original: "Открыть корзину",
      context: "По клику появляется окошко с корзиной. То есть тут не переход на новую страницу, а показ окна.",
      en: "View cart",
      "pt-BR": "Ver carrinho",
      es: "Ver carrito",
      "zh-CN": "查看购物车",
      de: "Warenkorb anzeigen",
      it: "Guarda il carrello",
      fr: "Voir le panier",
      pl: "Wyświetl koszyk",
      lt: "Открыть корзину",
      lv: "Открыть корзину",
      bg: "Открыть корзину",
      cs: "Zobrazit košík",
      he: "הצג עגלה",
      el: "Προβολή καλαθιού",
      am: "Открыть корзину",
      ge: "Открыть корзину",
      ro: "Vizualizare coș",
      kz: "Себетті көру",
      uk: "Переглянути кошик"
    }, {
      original: "Да",
      context: "",
      en: "Yes",
      "pt-BR": "Sim",
      es: "Sí",
      "zh-CN": "是",
      de: "Ja",
      it: "Sì",
      fr: "Oui",
      pl: "Tak",
      lt: "Да",
      lv: "Да",
      bg: "Да",
      cs: "Ano",
      he: "כן",
      el: "Ναι",
      am: "Да",
      ge: "Да",
      ro: "Da",
      kz: "Иә",
      uk: "Так"
    }, {
      original: "Нет",
      context: "",
      en: "No",
      "pt-BR": "Não",
      es: "No",
      "zh-CN": "否",
      de: "Nein",
      it: "No",
      fr: "Non",
      pl: "Nie",
      lt: "Нет",
      lv: "Нет",
      bg: "Нет",
      cs: "Ne",
      he: "לא",
      el: "Όχι",
      am: "Нет",
      ge: "Нет",
      ro: "Nu",
      kz: "Жоқ",
      uk: "Ні"
    }, {
      original: "Загрузка...",
      context: "С компьютера на сервер",
      en: "Loading...",
      "pt-BR": "Carregando...",
      es: "Cargando...",
      "zh-CN": "载入中…",
      de: "Wird geladen ...",
      it: "Caricamento...",
      fr: "Chargement...",
      pl: "Ładowanie...",
      lt: "Загрузка...",
      lv: "Загрузка...",
      bg: "Загрузка...",
      cs: "Načítání...",
      he: "טוען...",
      el: "Φόρτωση...",
      am: "Загрузка...",
      ge: "Загрузка...",
      ro: "Încărcare...",
      kz: "Жүктелуде...",
      uk: "Завантаження..."
    }, {
      original: "Файл загружен",
      context: "",
      en: "File loaded",
      "pt-BR": "Arquivo carregado",
      es: "Archivo cargado",
      "zh-CN": "文件已载入",
      de: "Datei geladen",
      it: "File caricato",
      fr: "Fichier chargé",
      pl: "Załadowano plik",
      lt: "Файл загружен",
      lv: "Файл загружен",
      bg: "Файл загружен",
      cs: "Soubor načten",
      he: "הקובץ נטען",
      el: "Έγινε φόρτωση αρχείου",
      am: "Файл загружен",
      ge: "Файл загружен",
      ro: "Fișierul a fost încărcat",
      kz: "Файл жүктелді",
      uk: "Файл завантажено"
    }, {
      original: "Ошибка загрузки!",
      context: "",
      en: "Loading error",
      "pt-BR": "Erro ao carregar",
      es: "Error de carga",
      "zh-CN": "载入出错",
      de: "Fehler beim Laden",
      it: "Errore di caricamento",
      fr: "Erreur de chargement",
      pl: "Błąd podczas ładowania",
      lt: "Ошибка загрузки!",
      lv: "Ошибка загрузки!",
      bg: "Ошибка загрузки!",
      cs: "Chyba při načítání",
      he: "שגיאת טעינה",
      el: "Σφάλμα φόρτωσης",
      am: "Ошибка загрузки!",
      ge: "Ошибка загрузки!",
      ro: "Eroare la încărcare",
      kz: "Жүктеу қателігі",
      uk: "Помилка завантаження"
    }, {
      original: "Выберите файл...",
      context: "",
      en: "Select a file...",
      "pt-BR": "Selecione um arquivo...",
      es: "Seleccionar un archivo...",
      "zh-CN": "选择一个文件…",
      de: "Wählen Sie eine Datei ...",
      it: "Seleziona un file...",
      fr: "Sélectionnez un fichier...",
      pl: "Wybierz plik...",
      lt: "Выберите файл...",
      lv: "Выберите файл...",
      bg: "Выберите файл...",
      cs: "Vyber soubor...",
      he: "בחר קובץ...",
      el: "Επιλέξτε ένα αρχείο...",
      am: "Выберите файл...",
      ge: "Выберите файл...",
      ro: "Selectaţi un fişier...",
      kz: "Файлды таңдаңыз...",
      uk: "Оберіть файл..."
    }],
    function() {
      try {
        $(function() {
          try {
            var e, r, l, a, t, n, o, c, s, d;
            return t = window.plp_page_id || window.plp.page_id, e = window.plp_content_id || window.plp.content_id, d = $.cookie("visit_id"), o = 0, n = 2500, r = {
              error: plp.l10n("Не удалось отправить форму!"),
              validate: plp.l10n("Неправильно заполнены поля:"),
              interval: plp.l10n("Пожалуйста, повторите отправку через пару секунд."),
              required: plp.l10n("Поле «%field%» обязательно для заполнения."),
              email: plp.l10n("Поле «%field%» должно содержать ваш настоящий e-mail адрес."),
              phone: plp.l10n("Поле «%field%» должно содержать правильный номер телефона."),
              number: plp.l10n("Поле «%field%» должно быть правильным числом.")
            }, s = plp.l10n("Да"), c = plp.l10n("Нет"), l = function(e, r, l) {
              try {
                var a;
                return "xs" === plp.screen ? (a = e, r && (a += "\n" + r), alert(a), void(l && l())) : Modernizr.cssanimations ? swal({
                  title: e,
                  text: r || null,
                  type: "error"
                }, l) : swal({
                  title: e,
                  text: r || null,
                  imageUrl: "//s.platformalp.ru/swal/error.png"
                }, l)
              } catch (t) {
                error_handler(t, "libs_plp 2", arguments.callee)
              }
            }, a = function(e, r, l) {
              try {
                var a;
                return "xs" === plp.screen ? (a = e, r && (a += "\n" + r), alert(a), void(l && l())) : Modernizr.cssanimations ? swal({
                  title: e,
                  text: r || null,
                  type: "success"
                }, l) : swal({
                  title: e,
                  text: r || null,
                  imageUrl: "//s.platformalp.ru/swal/success.png"
                }, l)
              } catch (t) {
                error_handler(t, "libs_plp 3", arguments.callee)
              }
            }, _.defer(function() {
              try {
                return $("form.form").each(function() {
                  try {
                    var p, h, u, f, m, v, g, b;
                    return u = $(this), m = u.data("form"), v = u.closest("[data-item]").data("item") || [], g = u.closest('[data-modal="cart"]').length ? plp.cart.list : [], f = u.data("fields"), b = {
                      hit: {
                        page_id: t,
                        ab_id: e,
                        visit_id: d,
                        referer: document.referrer,
                        uri: location.pathname + location.search
                      },
                      form: m,
                      item: v,
                      items: g,
                      fields: f
                    }, h = u.find(".field").each(function(e) {
                      try {
                        var r, a, t;
                        if (r = $(this), t = b.fields[e], "radio-list" === t.type && r.find("input").prop("name", _.uniqueId("radio")), "textarea" === t.type && r.find("textarea").val(function(e, r) {
                            try {
                              return $.trim(r)
                            } catch (l) {
                              error_handler(l, "libs_plp 7", arguments.callee)
                            }
                          }), "file" === t.type) return (a = function() {
                          try {
                            return r.find(":file").on("change", function() {
                              try {
                                var e, t;
                                for (t = r.find(":file").closest(".pseudo"), t.clone().insertAfter(t), e = $("<form>"), i = 0, attributes = t[0].attributes; i < attributes.length; i++) e.attr(attributes[i].name, attributes[i].value);
                                return e.append(t.children()), e.appendTo("body").hide(), t.remove(), e.ajaxSubmit({
                                  beforeSend: function() {
                                    try {
                                      return r.find("span.state").text(plp.l10n("Загрузка..."))
                                    } catch (e) {
                                      error_handler(e, "libs_plp 10", arguments.callee)
                                    }
                                  },
                                  uploadProgress: function(e, l, a, t) {
                                    try {
                                      return r.find("span.state").text(plp.l10n("Загрузка...") + " " + t + "%")
                                    } catch (i) {
                                      error_handler(i, "libs_plp 11", arguments.callee)
                                    }
                                  },
                                  success: function(l) {
                                    try {
                                      return r.data("result", l), r.find("span.state").text(plp.l10n("Файл загружен")), e.remove(), a()
                                    } catch (t) {
                                      error_handler(t, "libs_plp 12", arguments.callee)
                                    }
                                  },
                                  error: function(t) {
                                    try {
                                      return l(plp.l10n("Ошибка загрузки!"), 400 === t.status ? t.responseText : null), r.find("span.state").text(plp.l10n("Выберите файл...")), r.data("result", null), e.remove(), a()
                                    } catch (i) {
                                      error_handler(i, "libs_plp 13", arguments.callee)
                                    }
                                  },
                                  dataType: "json"
                                })
                              } catch (n) {
                                error_handler(n, "libs_plp 9", arguments.callee)
                              }
                            })
                          } catch (e) {
                            error_handler(e, "libs_plp 8", arguments.callee)
                          }
                        })()
                      } catch (n) {
                        error_handler(n, "libs_plp 6", arguments.callee)
                      }
                    }), u.find("[data-placeholder]").each(function() {
                      try {
                        var e, r;
                        if (e = $(this), e.attr("placeholder")) return e.removeAttr("data-placeholder").data("placeholder", !1);
                        if (!e.val()) return;
                        return e.data("placeholder", !0), r = e.val(), e.on("focus", function(r) {
                          try {
                            if (e.data("placeholder")) return e.val("").data("placeholder", !1)
                          } catch (l) {
                            error_handler(l, "libs_plp 15", arguments.callee)
                          }
                        }), e.on("blur", function(l) {
                          try {
                            if ("" === e.val()) return e.val(r).data("placeholder", !0)
                          } catch (a) {
                            error_handler(a, "libs_plp 16", arguments.callee)
                          }
                        })
                      } catch (l) {
                        error_handler(l, "libs_plp 14", arguments.callee)
                      }
                    }), p = u.find(".submit"), u.on("submit", function(e) {
                      try {
                        var t, i, d, f, v, y;
                        return e.preventDefault(), $.now() - n < o ? void l(r.error, r.interval) : (d = [], h.each(function(e) {
                          try {
                            var l;
                            if ("checkbox-input" === b.fields[e].type ? b.fields[e].value = $(this).find("input").prop("checked") ? s : c : "radio-list" === b.fields[e].type ? b.fields[e].value = $(this).find("[type=radio]:checked").val() || "" : "select-menu" === b.fields[e].type ? b.fields[e].value = $(this).find("select").val() : "hidden" === b.fields[e].type ? (b.fields[e].name = b.fields[e].id, b.fields[e].value = $(this).find("input").val()) : "file" === b.fields[e].type ? b.fields[e].value = $(this).data("result") || "" : (l = $(this).find(".form-control").data("placeholder"), b.fields[e].value = l ? "" : $(this).find(".form-control").val()), b.fields[e].required && "" === b.fields[e].value && d.push(r.required.replace("%field%", b.fields[e].name)), "" === b.fields[e].value) return;
                            if ("email" !== b.fields[e].type || /.+@.+\..+/.test(b.fields[e].value) || d.push(r.email.replace("%field%", b.fields[e].name)), "phone" === b.fields[e].type && !/.*\d.*\d.*\d.*\d.*/.test(b.fields[e].value)) return d.push(r.phone.replace("%field%", b.fields[e].name))
                          } catch (a) {
                            error_handler(a, "libs_plp 18", arguments.callee)
                          }
                        }), "checkbox" === m.privacy && (t = u.closest(".body").find(".agreement-checkbox input").prop("checked"), f = m.privacy_checkbox.replace(/[<>]/g, ""), t === !1 && d.push(r.required.replace("%field%", f))), d.length > 0 ? (u.trigger("submit-error"), void l(r.validate, d.join("\n"))) : (y = {
                          name: "",
                          phone: "",
                          email: "",
                          count: "",
                          fields: {},
                          item: {},
                          send: b,
                          items: []
                        }, _.each(b.fields, function(e) {
                          try {
                            var r;
                            if ("" === y[e.type] && (y[r = e.type] || (y[r] = e.value)), !y.fields[e.name]) return y.fields[e.name] = e.value
                          } catch (l) {
                            error_handler(l, "libs_plp 19", arguments.callee)
                          }
                        }), _.each(b.item, function(e) {
                          try {
                            var r, l;
                            return (r = y.item)[l = e.type] || (r[l] = _.escape(e.value))
                          } catch (a) {
                            error_handler(a, "libs_plp 20", arguments.callee)
                          }
                        }), _.each(b.items, function(e, r) {
                          try {
                            return y.items[r] = {}, _.each(e, function(e) {
                              try {
                                var l, a, t, i;
                                "amount" === e.type || "photo" === e.type ? (l = y.items[r])[t = e.type] || (l[t] = e.value) : (a = y.items[r])[i = e.type] || (a[i] = _.escape(e.value))
                              } catch (n) {
                                error_handler(n, "libs_plp 22", arguments.callee)
                              }
                            })
                          } catch (l) {
                            error_handler(l, "libs_plp 21", arguments.callee)
                          }
                        }), m.payPrice && !y.items.length && y.items.push({
                          amount: 1,
                          price: m.payPrice,
                          title: m.payTitle
                        }), p.prop("disabled", !0), v = function(e, t, i) {
                          try {
                            var n;
                            return _.defaults(e, y), console.log("Form data", {
                              time: e.time,
                              name: e.name,
                              email: e.email,
                              phone: e.phone,
                              count: e.count,
                              fields: e.fields,
                              item: e.item,
                              items: e.items
                            }), p.prop("disabled", !1), 0 === e.result ? (l(r.error, e.errors), u.trigger("submit-error")) : 1 === e.result ? (u.trigger("submit-success"), $.cookie("form_submitted", "1", {
                              expires: 30
                            }), "msg" === m.after ? a(_.template(m.msg, e), null) : "url" === m.after ? location.href = _.template(m.url, e) : "addhtml" === m.after ? $("body").append(_.template(m.addhtml, e)) : "pay" === m.after ? e.url ? location.href = e.url : e.form && $(e.form).hide().appendTo("body").submit() : "msg+url" === m.after ? a(_.template(m.msg, e), null, function() {
                              try {
                                return location.href = _.template(m.url, e)
                              } catch (r) {
                                error_handler(r, "libs_plp 24", arguments.callee)
                              }
                            }) : "msg+pay" === m.after ? a(_.template(m.msg, e), null, function() {
                              try {
                                if (e.url) return location.href = e.url;
                                if (e.form) return $(e.form).hide().appendTo("body").submit()
                              } catch (r) {
                                error_handler(r, "libs_plp 25", arguments.callee)
                              }
                            }) : "msg+addhtml" === m.after ? a(_.template(m.msg, e), null, function() {
                              try {
                                return $("body").append(_.template(m.addhtml, e))
                              } catch (r) {
                                error_handler(r, "libs_plp 26", arguments.callee)
                              }
                            }) : "js" === m.after && (n = "(function (data) { with (data) {" + m.js + "} })(<%= data %>);", $.globalEval(_.template(n, {
                              data: JSON.stringify(e)
                            })))) : (l(r.error, null), u.trigger("submit-error")), u.trigger("reset").find("[data-placeholder]").data("placeholder", !0), g.length && plp.cart.empty(), plp.modal.closeAll(), o = $.now()
                          } catch (c) {
                            error_handler(c, "libs_plp 23", arguments.callee)
                          }
                        }, i = function(e, a, t) {
                          try {
                            return u.trigger("submit-error"), p.prop("disabled", !1), l(r.error, 400 === e.status ? e.responseText : null), o = $.now()
                          } catch (i) {
                            error_handler(i, "libs_plp 27", arguments.callee)
                          }
                        }, $.ajax("/app/c", {
                          type: "POST",
                          data: JSON.stringify(b),
                          dataType: "json",
                          contentType: "application/json",
                          processData: !1,
                          success: v,
                          error: v
                        })))
                      } catch (w) {
                        error_handler(w, "libs_plp 17", arguments.callee)
                      }
                    })
                  } catch (y) {
                    error_handler(y, "libs_plp 5", arguments.callee)
                  }
                })
              } catch (p) {
                error_handler(p, "libs_plp 4", arguments.callee)
              }
            })
          } catch (p) {
            error_handler(p, "libs_plp 1", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }.call(this), $(function() {
      try {
        var e = [],
          r = ".modal-content, .sweet-overlay, .sweet-alert, #cboxOverlay, #colorbox",
          l = function(e, r) {
            try {
              var l = [];
              $(e).find(r).each(function() {
                try {
                  var e = $(this).parents().length;
                  l[e] ? l[e].push(this) : l[e] = [this]
                } catch (r) {
                  error_handler(r, "libs_plp 2", arguments.callee)
                }
              });
              for (var a = 0; a < l.length; a++)
                if (l[a]) return $(l[a]);
              return $()
            } catch (t) {
              error_handler(t, "libs_plp 1", arguments.callee)
            }
          };
        plp.modal = {
          init: function(e, r) {
            try {
              return e.on("click", function(e) {
                try {
                  plp.modal.open(r), e.preventDefault()
                } catch (l) {
                  error_handler(l, "libs_plp 4", arguments.callee)
                }
              })
            } catch (l) {
              error_handler(l, "libs_plp 3", arguments.callee)
            }
          },
          open: function(r) {
            try {
              r = $(r);
              var l = !!r.data("moved");
              l === !1 && (r.modal({
                backdrop: !1,
                keyboard: !1,
                show: !1
              }), r.data("moved", !0)), r.appendTo("div.area"), r.modal("show"), r.before('<div class="modal-backdrop fade in"></div>'), e.push(r), plp.lazy.update()
            } catch (a) {
              error_handler(a, "libs_plp 5", arguments.callee)
            }
          },
          openbyid: function(e) {
            try {
              a.filter('[data-id="' + e + '"]:visible:first').click()
            } catch (r) {
              error_handler(r, "libs_plp 6", arguments.callee)
            }
          },
          close: function() {
            try {
              var r = _.last(e).modal("hide");
              r.find(".macros-video").each(function() {
                try {
                  var e;
                  return e = $(this).find(".wrap"), e.attr("src", e.attr("src").replace("autoplay=1", "autoplay=0"))
                } catch (r) {
                  error_handler(r, "libs_plp 8", arguments.callee)
                }
              }), r.prev(".modal-backdrop").remove(), e = _.without(e, r)
            } catch (l) {
              error_handler(l, "libs_plp 7", arguments.callee)
            }
          },
          closeAll: function() {
            try {
              if (!e.length) return;
              plp.modal.close(), plp.modal.closeAll()
            } catch (r) {
              error_handler(r, "libs_plp 9", arguments.callee)
            }
          }
        };
        var a = $(".btn[data-modal], .btn-modal[data-modal]");
        a.each(function() {
          try {
            var e = $(this),
              r = e.attr("data-modal"),
              a = e.closest(".node");
            a.hasClass("widget-field") && (a = a.closest("[data-form]")), a.length || (a = e.closest(".modal")), ["cart", "agreement", "cookie"].indexOf(r) !== -1 && (a = $("div.area").first());
            var t = l(a, '.modal[data-modal="' + r + '"]');
            plp.modal.init(e, t)
          } catch (i) {
            error_handler(i, "libs_plp 10", arguments.callee)
          }
        });
        var t = location.href.match(/#modal-([a-z0-9]+)/);
        return t && plp.modal.openbyid(t[1]), $(document).on("click", 'a[href^="#modal-"]', function(e) {
          try {
            if (e.isDefaultPrevented()) return;
            var r = $(this).attr("href").match(/#modal-([a-z0-9]+)/);
            r && plp.modal.openbyid(r[1])
          } catch (l) {
            error_handler(l, "libs_plp 11", arguments.callee)
          }
        }), $(document).on("click", function(l) {
          try {
            if (!e.length) return;
            if ($(l.target).closest(a).length) return;
            if ($(l.target).closest('a[href^="#modal-"]').length) return;
            var t = _.last(e);
            if (l.target === t[0]) return plp.modal.close();
            if ($(l.target).closest(".modal-header > .close").length) return plp.modal.close();
            var i = $(l.target).closest(".modal");
            if (i.length && i[0] !== t[0]) return plp.modal.close();
            if (!$(l.target).closest(r).length) return plp.modal.close()
          } catch (n) {
            error_handler(n, "libs_plp 12", arguments.callee)
          }
        })
      } catch (i) {
        error_handler(i, "libs_plp 0", arguments.callee)
      }
    }),
    function() {
      try {
        $(function() {
          try {
            var e, r, l, a;
            if (r = function(e, r) {
                try {
                  var l, a, t, i, n, o, c, s;
                  return s = $(window).height(), o = e.height(), n = parseInt(r.css("paddingTop"), 10), i = parseInt(r.css("paddingBottom"), 10), a = r.data("paddingTop"), t = r.data("paddingBottom"), l = s - o, c = l + n + i, c < a + t ? r.css({
                    paddingTop: a,
                    paddingBottom: t
                  }) : r.css({
                    paddingTop: Math.floor(c / 2),
                    paddingBottom: Math.ceil(c / 2)
                  })
                } catch (d) {
                  error_handler(d, "libs_plp 2", arguments.callee)
                }
              }, l = function(e) {
                try {
                  return e.each(function() {
                    try {
                      return r($(this), $(this).find(".wrapper2").first())
                    } catch (e) {
                      error_handler(e, "libs_plp 4", arguments.callee)
                    }
                  })
                } catch (l) {
                  error_handler(l, "libs_plp 3", arguments.callee)
                }
              }, e = $(".section.fullheight"), e.length > 0) return e.each(function() {
              try {
                var e;
                return e = $(this).find(".wrapper2").first(), e.data("paddingTop", parseInt(e.css("padding-top"), 10)), e.data("paddingBottom", parseInt(e.css("padding-bottom"), 10))
              } catch (r) {
                error_handler(r, "libs_plp 5", arguments.callee)
              }
            }), setTimeout(function() {
              try {
                return l(e)
              } catch (r) {
                error_handler(r, "libs_plp 6", arguments.callee)
              }
            }, 100), a = null, $(window).on("resize", function() {
              try {
                return a && clearTimeout(a), a = setTimeout(function() {
                  try {
                    return l(e), a = null
                  } catch (r) {
                    error_handler(r, "libs_plp 8", arguments.callee)
                  }
                }, 100)
              } catch (r) {
                error_handler(r, "libs_plp 7", arguments.callee)
              }
            })
          } catch (t) {
            error_handler(t, "libs_plp 1", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }.call(this), $(document).ready(function() {
      function e(e, r, l) {
        try {
          var a = $.cookie(e);
          a ? (a = JSON.parse(a), a[r] || (a[r] = []), a[r].push(l), a = JSON.stringify(a)) : a = '{"' + r + '":["' + l + '"]}', $.cookie(e, a)
        } catch (t) {
          error_handler(t, "libs_plp 10", arguments.callee)
        }
      }

      function r(r) {
        try {
          _.remove(m, function(l) {
            try {
              var a = l.modal == r;
              if (a) {
                r.parent(".macros-modal").remove();
                var t = _.filter(l.section[0].classList, function(e) {
                  try {
                    return e.match(/node./gi)
                  } catch (r) {
                    error_handler(r, "libs_plp 13", arguments.callee)
                  }
                });
                "page" == l.type && (t = "section-helper"), e(l.type + "_events", t, l.name)
              }
              return a
            } catch (i) {
              error_handler(i, "libs_plp 12", arguments.callee)
            }
          })
        } catch (l) {
          error_handler(l, "libs_plp 11", arguments.callee)
        }
      }

      function l(e) {
        try {
          if ("1" === $(".eventmodals").attr("disableEvent") && "1" === $.cookie("form_submitted")) return;
          h && ($.fn.pagepiling.setAllowScrolling(!1), $("#pp-nav ul").hide()), e.before('<div class="modal-backdrop fade in"></div>'), e.modal({
            show: !0,
            backdrop: !1,
            keyboard: !1
          }), e.find("button.close").eq(0).on("click", function() {
            try {
              e.modal("hide"), r(e), h && ($.fn.pagepiling.setAllowScrolling(!0), $("#pp-nav ul").show())
            } catch (l) {
              error_handler(l, "libs_plp 15", arguments.callee)
            }
          })
        } catch (l) {
          error_handler(l, "libs_plp 14", arguments.callee)
        }
      }

      function a(e, r) {
        try {
          if (e.status) return;
          e.status = 1, setTimeout(function() {
            try {
              l(e.modal)
            } catch (r) {
              error_handler(r, "libs_plp 17", arguments.callee)
            }
          }, r)
        } catch (a) {
          error_handler(a, "libs_plp 16", arguments.callee)
        }
      }

      function t(e, r) {
        try {
          u.count || (u.count = setTimeout(function() {
            try {
              l(e)
            } catch (r) {
              error_handler(r, "libs_plp 19", arguments.callee)
            }
          }, r))
        } catch (a) {
          error_handler(a, "libs_plp 18", arguments.callee)
        }
      }

      function i() {
        try {
          u.count && (u.count = clearTimeout(u.count))
        } catch (e) {
          error_handler(e, "libs_plp 20", arguments.callee)
        }
      }

      function n() {
        try {
          u.update.doubleback && (u.update.doubleback.status = 1), u.update = {
            doubleback: null
          }
        } catch (e) {
          error_handler(e, "libs_plp 21", arguments.callee)
        }
      }

      function o(e) {
        try {
          u.section != e && (i(), n()), u.section = e
        } catch (r) {
          error_handler(r, "libs_plp 22", arguments.callee)
        }
      }

      function c(e, r, a) {
        try {
          var t, i, n = localStorage.user_visit;
          n ? (n = JSON.parse(n), t = {
            first: n.first,
            last: Date.now(),
            count: n.count + 1
          }, i = {
            first: (Date.now() - n.first) / 1e3,
            last: (Date.now() - n.last) / 1e3
          }, i.last < e && t.count === r && l(a)) : t = {
            first: Date.now(),
            last: Date.now(),
            count: 1
          }, localStorage.user_visit = JSON.stringify(t)
        } catch (o) {
          error_handler(o, "libs_plp 23", arguments.callee)
        }
      }

      function s(e, r) {
        try {
          var a = parseInt(localStorage.user_lead);
          Date.now() - a < 1e3 * e ? l(r) : u.formTracking || (_.each($(".section:not(.section-helper) .wrapper2 form"), function(e) {
            try {
              $(e).on("submit-done", function() {
                try {
                  localStorage.user_lead = Date.now()
                } catch (e) {
                  error_handler(e, "libs_plp 26", arguments.callee)
                }
              })
            } catch (r) {
              error_handler(r, "libs_plp 25", arguments.callee)
            }
          }), u.formTracking = !0)
        } catch (t) {
          error_handler(t, "libs_plp 24", arguments.callee)
        }
      }

      function d(e) {
        try {
          if (e) var i = _.filter(m, function(e) {
            try {
              return e.section[0] == u.section[0]
            } catch (r) {
              error_handler(r, "libs_plp 29", arguments.callee)
            }
          });
          else var n = {
              top: $(document).scrollTop(),
              height: document.documentElement.clientHeight,
              bottom: $(document).scrollTop() + document.documentElement.clientHeight
            },
            i = _.filter(m, function(e) {
              try {
                var r, l = e.height() <= n.height;
                return r = l ? e.bottom() <= n.bottom && e.top() >= n.top : e.top() <= n.top && e.bottom() >= n.bottom
              } catch (a) {
                error_handler(a, "libs_plp 28", arguments.callee)
              }
            });
          var d = {
            inview: _.filter(i, {
              name: "inview"
            })[0],
            longview: _.filter(i, {
              name: "longview"
            })[0],
            doubleback: _.filter(i, {
              name: "doubleback"
            })[0],
            doublecancel: _.filter(i, {
              name: "doublecancel"
            })[0],
            leave: _.filter(m, {
              name: "leave"
            })[0],
            pagelongview: _.filter(m, {
              name: "pagelongview"
            })[0],
            pagelongview2min: _.filter(m, {
              name: "pagelongview2min"
            })[0],
            pagelongview4min: _.filter(m, {
              name: "pagelongview4min"
            })[0],
            scrollend: _.filter(m, {
              name: "scrollend"
            })[0],
            doubleerror: _.filter(m, {
              name: "doubleerror"
            })[0],
            hourlyvisit: _.filter(m, {
              name: "hourlyvisit"
            })[0],
            weeklyvisit: _.filter(m, {
              name: "weeklyvisit"
            })[0],
            leadback_hour: _.filter(m, {
              name: "leadback_hour"
            })[0],
            leadback_day: _.filter(m, {
              name: "leadback_day"
            })[0],
            leadback_week: _.filter(m, {
              name: "leadback_week"
            })[0],
            leadback_month: _.filter(m, {
              name: "leadback_month"
            })[0]
          };
          if (!$(".modal:visible").length) {
            if (!e) {
              var p = i.length ? i[0].section : null;
              o(p)
            }
            if (d.inview && l(d.inview.modal), d.longview && t(d.longview.modal, 6e4), d.doubleback && (d.doubleback.status ? l(d.doubleback.modal) : u.update.doubleback || (u.update.doubleback = d.doubleback)), d.doublecancel && !d.doublecancel.status) {
              var h = $(d.doublecancel.section).find(".wrapper2 .modal"),
                f = _.remove(h, function(e) {
                  try {
                    var r = $(e).find("form");
                    return r.length
                  } catch (l) {
                    error_handler(l, "libs_plp 30", arguments.callee)
                  }
                });
              f.length && (_.each(f, function(e) {
                try {
                  var a = 0;
                  $(e).on("hide.bs.modal", function() {
                    try {
                      1 === a ? (_.each(f, function(e) {
                        try {
                          $(e).off("hide.bs.modal").off("submit-done")
                        } catch (r) {
                          error_handler(r, "libs_plp 33", arguments.callee)
                        }
                      }), l(d.doublecancel.modal)) : a++
                    } catch (e) {
                      error_handler(e, "libs_plp 32", arguments.callee)
                    }
                  }).on("submit-done", function() {
                    try {
                      d.doublecancel.status = d.doublecancel.status - 1, d.doublecancel.status || r(d.doublecancel.modal), $(e).off("hide.bs.modal").off("submit-done")
                    } catch (l) {
                      error_handler(l, "libs_plp 34", arguments.callee)
                    }
                  })
                } catch (t) {
                  error_handler(t, "libs_plp 31", arguments.callee)
                }
              }), d.doublecancel.status = f.length)
            }
            if (d.leave && !d.leave.status && (d.leave.status = 1, $(document).on("mouseleave", function(e) {
                try {
                  if (3 != e.which) {
                    var r = document.documentElement.clientWidth - e.pageX > 0;
                    r && ($(document).off("mouseleave"), l(d.leave.modal))
                  }
                } catch (a) {
                  error_handler(a, "libs_plp 35", arguments.callee)
                }
              })), d.pagelongview && a(d.pagelongview, 6e4), d.pagelongview2min && a(d.pagelongview2min, 12e4), d.pagelongview4min && a(d.pagelongview4min, 24e4), d.scrollend) {
              var v = $(".section-helper").index(".section") - 1,
                g = !1;
              if (e) g = v === u.section.index(".section");
              else {
                var b = $(".section").eq(v).offset().top,
                  y = $(".section").eq(v).height(),
                  w = $(document).scrollTop() + document.documentElement.clientHeight;
                g = b + y == w
              }
              g && l(d.scrollend.modal)
            }
            if (d.doubleerror) {
              var k = $(".section:not(.section-helper) .wrapper2 form");
              _.each(k, function(e) {
                try {
                  var r = 0;
                  $(e).on("submit-error", function() {
                    try {
                      1 === r ? (_.each(k, function(e) {
                        try {
                          $(e).off("submit-error")
                        } catch (r) {
                          error_handler(r, "libs_plp 38", arguments.callee)
                        }
                      }), $(".modal:visible").find(".close").click(), l(d.doubleerror.modal)) : r++
                    } catch (e) {
                      error_handler(e, "libs_plp 37", arguments.callee)
                    }
                  })
                } catch (a) {
                  error_handler(a, "libs_plp 36", arguments.callee)
                }
              })
            }
            d.hourlyvisit && c(1800, 2, d.hourlyvisit.modal), d.weeklyvisit && c(604800, 3, d.weeklyvisit.modal), d.leadback_hour && s(3600, d.leadback_hour.modal), d.leadback_day && s(25200, d.leadback_day.modal), d.leadback_week && s(604800, d.leadback_week.modal), d.leadback_month && s(18748800, d.leadback_month.modal)
          }
        } catch (x) {
          error_handler(x, "libs_plp 27", arguments.callee)
        }
      }

      function p() {
        try {
          for (var e = !1, r = 0; r < f.elements.length; r++) {
            var l = f.elements[r],
              a = l.$section.offset().top,
              t = l.$section.height(),
              i = $(document).scrollTop() + f.fixationHeight + window.innerHeight / 4;
            i >= a && i <= a + t + window.innerHeight / 4 && (l !== f.$previousReaction && (f.$previousReaction && f.$previousReaction.$buttons.find('button[need_hover="true"]').removeClass("hover-on-scroll"), l.$buttons.find('button[need_hover="true"]').addClass("hover-on-scroll"), f.$previousReaction = l), e = !0)
          }!e && f.$previousReaction && (f.$previousReaction.$buttons.find('button[need_hover="true"]').removeClass("hover-on-scroll"), f.$previousReaction = null)
        } catch (n) {
          error_handler(n, "libs_plp 39", arguments.callee)
        }
      }
      try {
        window.plp.events = [];
        var h = "slider" == window.plp.animations.section.type,
          u = {
            count: null,
            section: null,
            update: {
              doubleback: null
            },
            formTracking: !1
          },
          f = {
            elements: [],
            $previousReaction: null,
            fixationHeight: $(".section.fixation-top").height() || 0
          };
        _.each($(".section"), function(e, r) {
          try {
            var l = $(e);
            if (l.hasClass("section-helper")) var a = l.find(".eventmodals .modal"),
              t = "page";
            else var a = l.find("> .macros-modal > .modal"),
              t = "section";
            var i = $.cookie(t + "_events"),
              n = [];
            if (i && (i = JSON.parse(i), _.map(_.keys(i), function(e) {
                try {
                  l.hasClass(e) && (n = i[e])
                } catch (r) {
                  error_handler(r, "libs_plp 2", arguments.callee)
                }
              })), _.each(a, function(e, r) {
                try {
                  var i = {
                    name: $(e).attr("data-modal"),
                    section: l,
                    modal: $(e),
                    type: t
                  };
                  h || _.merge(i, {
                    top: function() {
                      try {
                        return l.offset().top
                      } catch (e) {
                        error_handler(e, "libs_plp 4", arguments.callee)
                      }
                    },
                    height: function() {
                      try {
                        return l.outerHeight()
                      } catch (e) {
                        error_handler(e, "libs_plp 5", arguments.callee)
                      }
                    },
                    bottom: function() {
                      try {
                        return l.outerHeight() + l.offset().top
                      } catch (e) {
                        error_handler(e, "libs_plp 6", arguments.callee)
                      }
                    }
                  });
                  var o = !1;
                  if ("section" == t && "inview" == i.name) {
                    var c = !h && i.bottom() < document.documentElement.clientHeight;
                    o = i.section.is($(".section").eq(0)) || c
                  }
                  if ("page" == t) {
                    var s = _.filter(window.plp.events, {
                        type: "section"
                      }),
                      d = _.map(a, function(e) {
                        try {
                          return $(e).attr("data-modal")
                        } catch (r) {
                          error_handler(r, "libs_plp 7", arguments.callee)
                        }
                      }),
                      p = {
                        first: $(".section").eq(0),
                        last: $(".section").eq($(".section-helper").index(".section") - 1)
                      };
                    if ("hourlyvisit" == i.name) {
                      var u = (_.indexOf(d, "weeklyvisit") != -1, "leadback_hour"),
                        f = _.indexOf(d, u) != -1;
                      o = m || f
                    }
                    if ("weeklyvisit" == i.name) {
                      var u = "leadback_hour",
                        f = _.indexOf(d, u) != -1;
                      o = f
                    }
                    if ("leadback_hour" == i.name) {
                      var m = _.indexOf(d, "leadback_day") != -1;
                      o = m
                    }
                    if ("leadback_day" == i.name) {
                      var m = _.indexOf(d, "leadback_week") != -1;
                      o = m
                    }
                    if ("leadback_week" == i.name) {
                      var m = _.indexOf(d, "leadback_month") != -1;
                      o = m
                    }
                    "scrollend" == i.name && (o = _.filter(s, function(e) {
                      try {
                        return "inview" == e.name && e.section.is(p.last)
                      } catch (r) {
                        error_handler(r, "libs_plp 8", arguments.callee)
                      }
                    }).length), "pagelongview" != i.name && "pagelongview2min" != i.name && "pagelongview4min" != i.name || (o = _.filter(s, function(e) {
                      try {
                        return "longview" == e.name && e.section.is(p.first)
                      } catch (r) {
                        error_handler(r, "libs_plp 9", arguments.callee)
                      }
                    }).length)
                  }
                  _.indexOf(n, i.name) != -1 || o ? $(e).parent(".macros-modal").remove() : window.plp.events.push(i)
                } catch (v) {
                  error_handler(v, "libs_plp 3", arguments.callee)
                }
              }), void 0 !== l.attr("id")) {
              var o = $('a[href="#' + l.attr("id") + '"]');
              f.elements.push({
                $section: l,
                $buttons: o
              })
            }
          } catch (c) {
            error_handler(c, "libs_plp 1", arguments.callee)
          }
        });
        var m = window.plp.events;
        h ? (o($(".pp-section.active")), $("div.area").on("leave", function(e, r) {
          try {
            o($(".section").eq(r - 1))
          } catch (l) {
            error_handler(l, "libs_plp 40", arguments.callee)
          }
        }), $("div.area").on("afterLoad", function(e, r) {
          try {
            d(h)
          } catch (l) {
            error_handler(l, "libs_plp 41", arguments.callee)
          }
        })) : $(window).on("scroll", function() {
          try {
            d(h), p()
          } catch (e) {
            error_handler(e, "libs_plp 42", arguments.callee)
          }
        }), $(window).on("resize", function() {
          try {
            d(h)
          } catch (e) {
            error_handler(e, "libs_plp 43", arguments.callee)
          }
        }), d(h), setTimeout(p, 500)
      } catch (v) {
        error_handler(v, "libs_plp 0", arguments.callee)
      }
    }),
    function() {
      try {
        $(function() {
          try {
            var e, r, l, a, t, i, n, o, c;
            if ("scroll" !== window.plp.animations.section.type && "scroll" !== window.plp.animations.widget.type || (new WOW).init(), $('[data-action="formscroll"]').each(function() {
                try {
                  var e, r, l, a, t;
                  return t = $(this), r = t.closest(".section"), a = r.prevAll(".section"), l = r.nextAll(".section"), e = t.hasClass("btn") ? t : t.find(".btn"), e.on("click", function() {
                    try {
                      var e, t, i;
                      if (t = l.find(".form:visible, [data-form]:visible").first(), 1 === t.length) return $("html, body").animate({
                        scrollTop: t.offset().top - 100
                      }, {
                        duration: 1500,
                        easing: "easeInOutQuint"
                      });
                      if (e = r.find(".form:visible, [data-form]:visible").first(), 1 === e.length) return $("html, body").animate({
                        scrollTop: e.offset().top - 100
                      }, {
                        duration: 1500,
                        easing: "easeInOutQuint"
                      });
                      if (i = a.find(".form:visible, [data-form]:visible").last(), 1 === i.length) return $("html, body").animate({
                        scrollTop: i.offset().top - 100
                      }, {
                        duration: 1500,
                        easing: "easeInOutQuint"
                      })
                    } catch (n) {
                      error_handler(n, "libs_plp 3", arguments.callee)
                    }
                  })
                } catch (i) {
                  error_handler(i, "libs_plp 2", arguments.callee)
                }
              }), r = $(".section.fixation-top").first(), l = null, t = !1, $(document).on("click", 'a[href^="#"]', function(e) {
                try {
                  var a, i, n;
                  if (e.isDefaultPrevented()) return;
                  if (a = $($(this).attr("href")), a.length) {
                    if (n = a.offset().top, r.length && (n -= r.height()), $("html").hasClass("pp")) i = a.closest(".pp-section").index(".pp-section"), i = a.closest(".pp-section").index(".pp-section"), $.fn.pagepiling.moveTo(i + 1);
                    else {
                      if (l)
                        if (l.get(0) !== a.get(0)) $("html,body").stop();
                        else if (t) return;
                      $("html,body").animate({
                        scrollTop: n
                      }, {
                        duration: 1e3,
                        easing: "easeInOutCubic",
                        always: function() {
                          try {
                            return t = !1
                          } catch (e) {
                            error_handler(e, "libs_plp 5", arguments.callee)
                          }
                        }
                      }), t = !0, l = a
                    }
                    return !1
                  }
                } catch (o) {
                  error_handler(o, "libs_plp 4", arguments.callee)
                }
              }), a = location.href.match(/scrollblock=(\d+)/)) {
              if (o = location.href.match(/scrolloffset=(-?\d+)/), n = o.length ? 1 * o[1] : 0, i = 1 * a[1], e = $(".node.section").eq(i), e.length) return c = e.offset().top + n, $(document).scrollTop(c);
              throw new Error("lib-scroll trying to scroll to unexisting " + i + " block")
            }
          } catch (s) {
            error_handler(s, "libs_plp 1", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }.call(this), $(function() {
      try {
        plp.cart = {};
        var e = function(e) {
            try {
              var r = e.match(/\d/g);
              if (!r) return 0;
              var l = e.indexOf(r[0]),
                a = e.lastIndexOf(r[r.length - 1]),
                t = (e[l], e[a], e.substring(l, a + 1));
              t = t.replace(/[^\d\.\,]+/g, "");
              var i = t.indexOf(".") >= 0,
                n = t.indexOf(",") >= 0;
              if (i || n) {
                var r = t.match(/(.+)[\,\.](\d\d)$/);
                if (r) var o = 1 * r[1].replace(/[\,\.]/g, ""),
                  c = 1 * ("0." + r[2]),
                  s = o + c;
                else var s = 1 * t.replace(/[\,\.]/g, "")
              } else var s = 1 * t;
              return s
            } catch (d) {
              error_handler(d, "libs_plp 1", arguments.callee)
            }
          },
          r = function(e) {
            try {
              var r = e.match(/\d/g);
              if (!r) return "%s%";
              e = e.replace(/\&nbsp\;/g, " ");
              var l = e.match(/[\:\-]/);
              l && (e = e.replace(/.*[\:\-]\s*(.*)/, "$1"));
              var a = e.indexOf(r[0]),
                t = e.lastIndexOf(r[r.length - 1]),
                i = (e[a], e[t], e.substring(a, t + 1));
              return e.replace(i, "%s%")
            } catch (n) {
              error_handler(n, "libs_plp 2", arguments.callee)
            }
          },
          l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          a = $('[data-modal="cart"]'),
          t = a.find(".cont").first(),
          i = t.next();
        t.find('[data-role="itemphoto"]').attr("data-lazy-bgimage", l), plp.lazy.add(a, function() {
          try {
            plp.lazy.force(t), plp.lazy.force(i)
          } catch (e) {
            error_handler(e, "libs_plp 3", arguments.callee)
          }
        });
        var n = t.find(".node.widget-cart-list").first(),
          o = n.children(".wrapper1").children(".wrapper2"),
          c = o.children(".cont");
        plp.lazy.force(c), n.data("template", c.parent().html()), c.remove();
        var s = $();
        plp.cart.add = function(e) {
          try {
            var r = _.filter(e, {
                type: "title"
              })[0],
              a = _.filter(e, {
                type: "price"
              })[0],
              t = _.filter(e, {
                type: "amount"
              })[0],
              i = _.filter(e, {
                type: "photo"
              })[0],
              c = !1;
            if (_.each(plp.cart.list, function(e, l) {
                try {
                  var i = _.filter(e, {
                      type: "title"
                    })[0],
                    n = _.filter(e, {
                      type: "price"
                    })[0],
                    s = _.filter(e, {
                      type: "amount"
                    })[0];
                  r.value === i.value && a.value === n.value && (s.value += 1 * t.value, o.children().eq(l).trigger("setamount", [s.value]), c = !0)
                } catch (d) {
                  error_handler(d, "libs_plp 5", arguments.callee)
                }
              }), c) return store.set("cart", plp.cart.list), void plp.cart.update();
            plp.cart.list.push(e), store.set("cart", plp.cart.list), plp.cart.update();
            var d = $(n.data("template"));
            o.append(d), d.find('[data-role="setamount"]').val(t.value), d.find('[data-role="itemprice"]').html(a.value), d.find('[data-role="itemname"]').html(r.value), d.find('[data-role="itemphoto"]').css("backgroundImage", 'url("' + (i.value || l) + '")').removeAttr("data-lazy-bgimage").removeAttr("data-lazy-bgimage_size"), s = s.add(d), d.on("setamount", function(e, r) {
              try {
                t.value = r, store.set("cart", plp.cart.list), d.find('[data-role="setamount"]').val(r), t.value ? plp.cart.update() : d.trigger("removefromcart")
              } catch (l) {
                error_handler(l, "libs_plp 6", arguments.callee)
              }
            }), d.on("removefromcart", function(r) {
              try {
                plp.cart.list.splice(plp.cart.list.indexOf(e), 1), store.set("cart", plp.cart.list), d.slideUp(250, function() {
                  try {
                    d.remove(), s = s.not(d), plp.cart.update()
                  } catch (e) {
                    error_handler(e, "libs_plp 8", arguments.callee)
                  }
                })
              } catch (l) {
                error_handler(l, "libs_plp 7", arguments.callee)
              }
            }), d.find('[data-role="removefromcart"]').on("click", function() {
              try {
                d.trigger("removefromcart")
              } catch (e) {
                error_handler(e, "libs_plp 9", arguments.callee)
              }
            }), d.find('[data-role="setamount"]').on("change", function() {
              try {
                var e = 1 * $(this).val();
                d.trigger("setamount", [e])
              } catch (r) {
                error_handler(r, "libs_plp 10", arguments.callee)
              }
            }), d.find('[data-role="increaseamount"]').on("click", function() {
              try {
                var e = t.value + 1;
                d.trigger("setamount", [e])
              } catch (r) {
                error_handler(r, "libs_plp 11", arguments.callee)
              }
            }), d.find('[data-role="decreaseamount"]').on("click", function() {
              try {
                var e = t.value - 1;
                d.trigger("setamount", [e])
              } catch (r) {
                error_handler(r, "libs_plp 12", arguments.callee)
              }
            })
          } catch (p) {
            error_handler(p, "libs_plp 4", arguments.callee)
          }
        }, plp.cart.update = function() {
          try {
            var l, a = 0,
              n = 0;
            if (_.each(plp.cart.list, function(t) {
                try {
                  var i = 1 * _.filter(t, {
                      type: "amount"
                    })[0].value,
                    o = _.filter(t, {
                      type: "price"
                    })[0].value;
                  a += i, n += e(o) * i, l = l || r(o)
                } catch (c) {
                  error_handler(c, "libs_plp 14", arguments.callee)
                }
              }), $('.btn[data-modal="cart"] *').each(function() {
                try {
                  $(this).contents().each(function() {
                    try {
                      3 === this.nodeType && this.data.match(/\d/) && (this.data = this.data.replace(/\d+/, a))
                    } catch (e) {
                      error_handler(e, "libs_plp 16", arguments.callee)
                    }
                  })
                } catch (e) {
                  error_handler(e, "libs_plp 15", arguments.callee)
                }
              }), !plp.cart.list.length) return $('[data-role="carttotal"] span').html("-"), i.show(), void t.hide();
            t.show(), i.hide(), $('[data-role="carttotal"] span').html(l.replace("%s%", n))
          } catch (o) {
            error_handler(o, "libs_plp 13", arguments.callee)
          }
        }, plp.cart.empty = function() {
          try {
            s.trigger("removefromcart")
          } catch (e) {
            error_handler(e, "libs_plp 17", arguments.callee)
          }
        }, plp.cart.list = [], (store.get("cart") || []).forEach(function(e) {
          try {
            plp.cart.add(e)
          } catch (r) {
            error_handler(r, "libs_plp 18", arguments.callee)
          }
        }), plp.cart.update(), $(document.body).on("click", '[data-action="addtocart"]', function(e) {
          try {
            var r = $(e.currentTarget).closest("[data-item]");
            if (!r.length) return void swal(plp.l10n("Товар не найден"), plp.l10n("Кнопка должна находиться в карточке товара."), "error");
            var l = _.cloneDeep(r.data("item")),
              a = r.find('[data-role="setamount"]');
            if (a.length) var t = {
              name: plp.l10n("Количество"),
              type: "amount",
              value: 1 * a.val() || 1
            };
            else var t = {
              name: plp.l10n("Количество"),
              type: "amount",
              value: 1
            };
            if (l.push(t), !r.find('[data-role="image"]').length) {
              var i = _.filter(l, {
                type: "photo"
              })[0];
              i.value = !1
            }
            plp.cart.add(l), swal({
              title: plp.l10n("Добавлено в корзину!"),
              type: "success",
              showCancelButton: !0,
              cancelButtonText: plp.l10n("ОК"),
              confirmButtonText: plp.l10n("Открыть корзину")
            }, function() {
              try {
                $('.btn[data-modal="cart"]').first().click()
              } catch (e) {
                error_handler(e, "libs_plp 20", arguments.callee)
              }
            })
          } catch (n) {
            error_handler(n, "libs_plp 19", arguments.callee)
          }
        })
      } catch (d) {
        error_handler(d, "libs_plp 0", arguments.callee)
      }
    }),
    function() {
      try {
        $(function() {
          try {
            return $(".node[data-bgsnow]").each(function() {
              try {
                var e, r, l;
                return e = $(this), r = e.data("bgsnow"), e.removeAttr("data-bgsnow"), l = new Snowfall({
                  root: e.find("> .wrapper1 > .wrapper2").get(0),
                  type: "text",
                  content: ["*", "&#10052", "&#10053", "&#10054", "."],
                  minSize: 10,
                  maxSize: 30
                }), e.data("bgsnow", l)
              } catch (a) {
                error_handler(a, "libs_plp 2", arguments.callee)
              }
            })
          } catch (e) {
            error_handler(e, "libs_plp 1", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }.call(this), plp.isRetina = function() {
      try {
        if (window.devicePixelRatio > 1) return !0;
        var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !(!window.matchMedia || !window.matchMedia(e).matches)
      } catch (r) {
        error_handler(r, "libs_plp 0", arguments.callee)
      }
    },
    function() {
      try {
        var e;
        "slider" === window.plp.animations.section.type && (e = function() {
          try {
            var r;
            if (!window.plp.screen) return setTimeout(e, 10);
            if ("xs" !== window.plp.screen) return $("html").addClass("pp"), $("div.area").pagepiling({
              menu: null,
              direction: "vertical",
              verticalCentered: !1,
              sectionsColor: [],
              anchors: [],
              scrollingSpeed: 700,
              easing: "swing",
              loopBottom: !1,
              loopTop: !1,
              css3: !0,
              navigation: {
                bulletsColor: "#fff",
                position: "right"
              },
              normalScrollElements: null,
              normalScrollElementTouchThreshold: 5,
              touchSensitivity: 5,
              keyboardScrolling: !0,
              sectionSelector: ".section:not(.section-helper)",
              animateAnchor: !1,
              onLeave: function(e, r, l) {
                try {
                  var a;
                  if ($("div.area").trigger("leave", [r]), $(".pp-section").eq(e - 1).find(".wow").addClass("wow-finished"), $(".pp-section").eq(r - 1).find(".wow:not(.wow-finished)").removeAttr("style").css({
                      visibility: "hidden"
                    }), a = function(e, r) {
                      try {
                        return setTimeout(r, e)
                      } catch (l) {
                        error_handler(l, "libs_plp 3", arguments.callee)
                      }
                    }, $(".wow:not(.wow-finished)").length) return a(700, function() {
                    try {
                      return $(".pp-section").eq(r - 1).find(".wow").css({
                        visibility: "visible"
                      }), (new WOW).init()
                    } catch (e) {
                      error_handler(e, "libs_plp 4", arguments.callee)
                    }
                  })
                } catch (t) {
                  error_handler(t, "libs_plp 2", arguments.callee)
                }
              },
              afterLoad: function(e, r) {
                try {
                  return $("div.area").trigger("afterLoad", [r])
                } catch (l) {
                  error_handler(l, "libs_plp 5", arguments.callee)
                }
              }
            }), r = function() {
              try {
                var e;
                return e = $("div.area").height(), $(".pp-section>.wrapper1, .pp-section>.wrapper1>.wrapper2").css({
                  height: e
                })
              } catch (r) {
                error_handler(r, "libs_plp 6", arguments.callee)
              }
            }, r(), $(window).on("resize", r)
          } catch (l) {
            error_handler(l, "libs_plp 1", arguments.callee)
          }
        })()
      } catch (r) {
        error_handler(r, "libs_plp 0", arguments.callee)
      }
    }.call(this), $.lazyLoadXT.autoInit = !1, $.lazyLoadXT.edgeY = 1e3, $.lazyLoadXT.updateEvent += " lazyupdate", $.lazyLoadXT.oninit = {}, $.lazyLoadXT.onshow = {}, $.lazyLoadXT.onload = {}, $.lazyLoadXT.onerror = {}, plp.lazy = {
      add: function(e, r, l) {
        try {
          return e.addClass("lazy").lazyLoadXT({
            edgeY: void 0 !== l ? l : plp.lazy.distance()
          }).one("lazyshow", function(e) {
            try {
              var l = $(this);
              l.removeClass("lazy"), r(l), e.stopPropagation()
            } catch (a) {
              error_handler(a, "libs_plp 1", arguments.callee)
            }
          }), plp.lazy.update(), e
        } catch (a) {
          error_handler(a, "libs_plp 0", arguments.callee)
        }
      },
      trigger: function(e) {
        try {
          return e.trigger("lazyshow")
        } catch (r) {
          error_handler(r, "libs_plp 2", arguments.callee)
        }
      },
      force: function(e) {
        try {
          e = e || $("div.area");
          var r = e.find(".lazy").filter(function() {
            try {
              return 0 === $(this).parentsUntil(e).filter(".modal").length
            } catch (r) {
              error_handler(r, "libs_plp 4", arguments.callee)
            }
          });
          return plp.lazy.trigger(r), e
        } catch (l) {
          error_handler(l, "libs_plp 3", arguments.callee)
        }
      },
      update: function() {
        try {
          $(document).trigger("lazyupdate")
        } catch (e) {
          error_handler(e, "libs_plp 5", arguments.callee)
        }
      },
      distance: function(e) {
        try {
          return e && ($.lazyLoadXT.edgeY = 1 * e, plp.lazy.update()), $.lazyLoadXT.edgeY
        } catch (r) {
          error_handler(r, "libs_plp 6", arguments.callee)
        }
      }
    }, $(function() {
      function e(e) {
        try {
          var r = e.w << 16 | e.h << 2 | e.c,
            l = e.b << 16 | e.q << 6,
            a = r.toString(29),
            t = l.toString(29),
            i = +r.toString().substring(0, 1) + +l.toString().substring(0, 1);
          return i.toString(29) + a + t + (a.length.toString(29) + t.length.toString(29))
        } catch (n) {
          error_handler(n, "libs_plp 8", arguments.callee)
        }
      }

      function r(e) {
        try {
          return /\/\/u\d*\.platformalp\.ru/.test(e) || /\/\/u\d*\.filesonload\.ru/.test(e)
        } catch (r) {
          error_handler(r, "libs_plp 9", arguments.callee)
        }
      }

      function l(r, l) {
        try {
          plp.isRetina() && l.retina && (l.width2 *= 2, l.height2 *= 2);
          var a = Math.min(l.width1, 2e3),
            t = Math.min(l.height1, 2e3);
          l.width2 > a && (l.height2 = a / l.width2 * l.height2, l.width2 = a), l.height2 > t && (l.width2 = t / l.height2 * l.width2, l.height2 = t);
          var i = e({
            h: l.height2 || 1,
            w: l.width2 || 1
          });
          return r.replace(/(.+?.\w+)\/(.+)/, "$1/s/" + i + "/$2")
        } catch (n) {
          error_handler(n, "libs_plp 10", arguments.callee)
        }
      }
      try {
        plp.lazy.add($("[data-lazy-iframe]"), function(e) {
          try {
            e.attr("src", e.attr("data-lazy-iframe")), e.removeAttr("data-lazy-iframe"), e.addClass("lazy-loading"), e.on("load", function() {
              try {
                e.removeClass("lazy-loading"), e.trigger("lazyload")
              } catch (r) {
                error_handler(r, "libs_plp 12", arguments.callee)
              }
            }).on("error", function() {
              try {
                e.removeClass("lazy-loading"), e.trigger("lazyerror")
              } catch (r) {
                error_handler(r, "libs_plp 13", arguments.callee)
              }
            })
          } catch (r) {
            error_handler(r, "libs_plp 11", arguments.callee)
          }
        }), plp.lazy.add($("[data-lazy-image]"), function(e) {
          try {
            var a = e.attr("data-lazy-image");
            if (r(a) && "true" !== e.attr("data-lazy-image_noscale")) {
              var t = e.attr("data-lazy-image_size").split(","),
                i = {
                  retina: "true" !== e.attr("data-lazy-image_nohd"),
                  width1: 1 * t[0],
                  width2: 1 * t[0],
                  height1: 1 * t[1],
                  height2: 1 * t[1]
                },
                n = e.attr("data-lazy-image_detect");
              if ("xs" === plp.screen) {
                var o = e.attr("data-lazy-image_detect-xs");
                o && (n = o)
              }
              if ("css-width" === n) i.width2 = e.width(), i.width2 < i.width1 && (i.height2 = i.width2 / i.width1 * i.height1);
              else if ("css-width-height" === n) i.width2 = e.width(), i.height2 = e.height();
              else if ("css-max-height" === n) {
                var c = parseInt(e.css("max-height"));
                i.height1 > c ? (i.height2 = c, i.width2 = c / i.height1 * i.width1) : e.css("max-height", i.height2)
              } else if ("css-max-width-max-height" === n) {
                var s = parseInt(e.css("max-width")),
                  d = parseInt(e.css("max-height"));
                i.width2 > s && (i.width2 = s, i.height2 = s / i.width1 * i.height1), i.height2 > d && (i.width2 = d / i.height2 * i.width2, i.height2 = d), i.width2 < s && e.css("max-width", i.width2), i.height2 < d && e.css("max-height", i.height2)
              } else if ("css-width-max-height" === n) {
                i.width2 = e.width(), i.width2 < i.width1 && (i.height2 = i.width2 / i.width1 * i.height1);
                var d = parseInt(e.css("max-height"));
                i.height2 > d ? i.height2 = d : e.css("max-height", i.height2)
              } else "fill-width" === n && (i.width2 = e.parent().width(), i.height2 = i.width2 / i.width1 * i.height1);
              a = l(a, i)
            }
            e.data(), e.removeAttr("data-lazy-image"), e.removeAttr("data-lazy-image_size"), e.removeAttr("data-lazy-image_detect"), e.removeAttr("data-lazy-image_nohd"), e.removeAttr("data-lazy-image_noscale"), e.addClass("lazy-loading"), $("<img>").attr("src", a).on("load", function() {
              try {
                e.attr("src", a), e.removeClass("lazy-loading"), e.trigger("lazyload")
              } catch (r) {
                error_handler(r, "libs_plp 15", arguments.callee)
              }
            }).on("error", function() {
              try {
                e.removeClass("lazy-loading"), e.trigger("lazyerror")
              } catch (r) {
                error_handler(r, "libs_plp 16", arguments.callee)
              }
            })
          } catch (p) {
            error_handler(p, "libs_plp 14", arguments.callee)
          }
        }), plp.lazy.add($("[data-lazy-bgimage]"), function(e) {
          try {
            var a = e.attr("data-lazy-bgimage");
            if (r(a) && "true" !== e.attr("data-lazy-bgimage_noscale")) {
              var t = e.attr("data-lazy-bgimage_size").split(","),
                i = {
                  retina: "true" !== e.attr("data-lazy-bgimage_nohd"),
                  width1: 1 * t[0],
                  width2: 1 * t[0],
                  height1: 1 * t[1],
                  height2: 1 * t[1]
                },
                n = e.width(),
                o = e.height(),
                c = e.css("background-size");
              "cover" === c ? (i.width1 > n && (i.width2 = n, i.height2 = n / i.width1 * i.height1), i.height2 < o && (i.height2 = o, i.width2 = o / i.height1 * i.width1)) : "contain" === c && (i.width2 > n && (i.width2 = n, i.height2 = n / i.width1 * i.height1), i.height2 > o && (i.height2 = o, i.width2 = o / i.height1 * i.width1));
              var a = l(a, i)
            }
            e.data(), e.removeAttr("data-lazy-bgimage"), e.removeAttr("data-lazy-bgimage_size"), e.removeAttr("data-lazy-bgimage_nohd"), e.removeAttr("data-lazy-bgimage_noscale"), e.addClass("lazy-loading"), $("<img>").attr("src", a).on("load", function() {
              try {
                e.css("background-image", "url(" + a + ")"), e.removeClass("lazy-loading"), e.trigger("lazyload")
              } catch (r) {
                error_handler(r, "libs_plp 18", arguments.callee)
              }
            }).on("error", function() {
              try {
                e.removeClass("lazy-loading"), e.trigger("lazyerror")
              } catch (r) {
                error_handler(r, "libs_plp 19", arguments.callee)
              }
            })
          } catch (s) {
            error_handler(s, "libs_plp 17", arguments.callee)
          }
        }), plp.lazy.add($("[data-lazy-all], .lazy-all"), function(e) {
          try {
            plp.lazy.force(e)
          } catch (r) {
            error_handler(r, "libs_plp 20", arguments.callee)
          }
        })
      } catch (a) {
        error_handler(a, "libs_plp 7", arguments.callee)
      }
    }),
    function() {
      try {
        $(function() {
          try {
            return $(".node[data-bgvideo]").each(function() {
              try {
                var e, r;
                return e = $(this), r = e.data("bgvideo"), plp.lazy.add(e.removeAttr("data-bgvideo"), function(l) {
                  try {
                    var a;
                    if ("youtube" === r.bgVideo_Source) return a = $("<div></div>").prependTo(e.children(".wrapper1")), a.data("property", {
                      videoURL: r.bgVideo_Youtube,
                      containment: a,
                      mute: !0,
                      showControls: !1
                    }).YTPlayer();
                    if ("direct" === r.bgVideo_Source || "library" === r.bgVideo_Source) return a = e.children(".wrapper1"), a.vide({
                      mp4: r.bgVideo_Mp4,
                      webm: r.bgVideo_Webm,
                      ogv: r.bgVideo_Ogv
                    }, {
                      mute: !0,
                      autoplay: !0,
                      loop: !0,
                      posterType: "none"
                    })
                  } catch (t) {
                    error_handler(t, "libs_plp 3", arguments.callee)
                  }
                })
              } catch (l) {
                error_handler(l, "libs_plp 2", arguments.callee)
              }
            })
          } catch (e) {
            error_handler(e, "libs_plp 1", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }.call(this), $(function() {
      try {
        plp.msg_error = function(e, r, l) {
          try {
            if ("xs" === plp.screen) {
              var a = r ? e + "\n" + r : e;
              return alert(a), void(l && l())
            }
            return Modernizr.cssanimations ? swal({
              title: e,
              text: r || null,
              type: "error"
            }, l) : swal({
              title: e,
              text: r || null,
              imageUrl: "//s.platformalp.ru/swal/error.png"
            }, l)
          } catch (t) {
            error_handler(t, "libs_plp 1", arguments.callee)
          }
        }, plp.msg_success = function(e, r, l) {
          try {
            if ("xs" === plp.screen) {
              var a = r ? e + "\n" + r : e;
              return alert(a), void(l && l())
            }
            return Modernizr.cssanimations ? swal({
              title: e,
              text: r || null,
              type: "success"
            }, l) : swal({
              title: e,
              text: r || null,
              imageUrl: "//s.platformalp.ru/swal/success.png"
            }, l)
          } catch (t) {
            error_handler(t, "libs_plp 2", arguments.callee)
          }
        }
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }), $(function() {
      try {
        $("[data-ym_goal]").each(function() {
          try {
            var e = $(this),
              r = _.uniqueId("goal"),
              l = e.data("ym_goal"),
              a = function() {
                try {
                  window.yaCounter && yaCounter.reachGoal(l)
                } catch (e) {
                  error_handler(e, "libs_plp 2", arguments.callee)
                }
              };
            e.on("click", function() {
              try {
                var l = e.hasClass("submit") && e.find(":submit").length,
                  t = "send" === e.attr("data-action");
                l || t ? $(this).closest("form.form, [data-form]").off(r).one("submit-success." + r, function() {
                  try {
                    a()
                  } catch (e) {
                    error_handler(e, "libs_plp 4", arguments.callee)
                  }
                }) : a()
              } catch (i) {
                error_handler(i, "libs_plp 3", arguments.callee)
              }
            })
          } catch (t) {
            error_handler(t, "libs_plp 1", arguments.callee)
          }
        }), $("[data-ga_category]").each(function() {
          try {
            var e = $(this),
              r = _.uniqueId("goal"),
              l = e.data("ga_action"),
              a = e.data("ga_category"),
              t = function() {
                try {
                  window.ga && ga("send", "event", a, l), window.gtag && gtag("event", "generate_lead", {
                    event_category: a,
                    event_action: l
                  })
                } catch (e) {
                  error_handler(e, "libs_plp 6", arguments.callee)
                }
              };
            e.on("click", function() {
              try {
                var l = e.hasClass("submit") && e.find(":submit").length,
                  a = "send" === e.attr("data-action");
                l || a ? $(this).closest("form.form, [data-form]").off(r).one("submit-success." + r, function() {
                  try {
                    t()
                  } catch (e) {
                    error_handler(e, "libs_plp 8", arguments.callee)
                  }
                }) : t()
              } catch (i) {
                error_handler(i, "libs_plp 7", arguments.callee)
              }
            })
          } catch (i) {
            error_handler(i, "libs_plp 5", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }), $(function() {
      try {
        var hit = {
            page_id: plp.page_id,
            ab_id: plp.content_id,
            visit_id: $.cookie("visit_id"),
            referer: document.referrer,
            uri: location.pathname + location.search
          },
          antiflood = {
            last: 0,
            interval: 2500
          },
          language = {
            error: plp.l10n("Не удалось отправить форму!"),
            validate: plp.l10n("Неправильно заполнены поля:"),
            interval: plp.l10n("Пожалуйста, повторите отправку через пару секунд."),
            required: plp.l10n("Поле «%field%» обязательно для заполнения."),
            email: plp.l10n("Поле «%field%» должно содержать ваш настоящий e-mail адрес."),
            phone: plp.l10n("Поле «%field%» должно содержать правильный номер телефона."),
            number: plp.l10n("Поле «%field%» должно быть правильным числом."),
            yes: plp.l10n("Да"),
            no: plp.l10n("Нет")
          };
        $('.btn[data-action="send"]').on("click", function() {
          try {
            $(this).closest("[data-form]").trigger("submit")
          } catch (e) {
            error_handler(e, "libs_plp 1", arguments.callee)
          }
        }), $(".node[data-form]").each(function() {
          try {
            var $form = $(this);
            $form.on("keyup", function(e) {
              try {
                if ("TEXTAREA" === e.target.tagName) return;
                13 === e.keyCode && $form.trigger("submit")
              } catch (r) {
                error_handler(r, "libs_plp 3", arguments.callee)
              }
            });
            var fields = [],
              errors = [],
              variables = {},
              items = $form.closest('[data-modal="cart"]').length ? plp.cart.list : [];
            $form.on("input change", function() {
              try {
                fields = [], errors = [], variables = {}, $form.find(".widget-field").each(function() {
                  try {
                    var $field = $(this);
                    if ($field.closest("[data-form]")[0] !== $form[0]) return;
                    var vals = $field.find(".code").data("vals");
                    if (vals.condition) {
                      var is_hidden = !1;
                      try {
                        var scope = _.extend({
                          round: Math.round,
                          min: Math.min,
                          max: Math.max,
                          ceil: Math.ceil,
                          floor: Math.floor,
                          pow: Math.pow,
                          abs: Math.abs,
                          random: Math.random
                        }, variables);
                        with(scope) is_hidden = !eval(vals.condition)
                      } catch (e) {
                        console.error("Condition error", e), is_hidden = !1
                      }
                      if (is_hidden && !$field.hasClass("is-hidden") && $field.addClass("is-hidden"), !is_hidden && $field.hasClass("is-hidden") && $field.removeClass("is-hidden"), is_hidden) return void(vals.variable && (variables[vals.variable] = 0))
                    }
                    var $slide = $field.closest(".widget-form2 .swiper-slide");
                    if ($slide.length) {
                      var $slides = $slide.parent().children(),
                        fieldSlideIndex = $slide.index(),
                        activeSlideIndex = $slides.filter(".swiper-slide-active").index();
                      if (fieldSlideIndex > activeSlideIndex) return
                    }
                    var field = {
                      name: vals.text,
                      type: vals.type,
                      required: vals.required,
                      id: vals.id,
                      value: null
                    };
                    if (fields.push(field), "textarea" === vals.type) field.value = $field.find("textarea").val(), vals.required && !field.value && errors.push(["required", field.name]), vals.variable && (variables[vals.variable] = field.value);
                    else if ("text" === vals.type) field.value = $field.find("input").val(), vals.required && !field.value && errors.push(["required", field.name]), vals.variable && (variables[vals.variable] = field.value);
                    else if ("name" === vals.type) field.value = $field.find("input").val(), vals.required && !field.value && errors.push(["required", field.name]), vals.variable && (variables[vals.variable] = field.value);
                    else if ("phone" === vals.type) field.value = $field.find("input").val(), vals.required && !field.value && errors.push(["required", field.name]), field.value && !/.*\d.*\d.*\d.*\d.*/.test(field.value) && errors.push(["phone", field.name]), vals.variable && (variables[vals.variable] = field.value);
                    else if ("email" === vals.type) field.value = $field.find("input").val(), vals.required && !field.value && errors.push(["required", field.name]), field.value && !/.+@.+\..+/.test(field.value) && errors.push(["email", field.name]), vals.variable && (variables[vals.variable] = field.value);
                    else if ("count" === vals.type) field.value = 1 * $field.find("input").val() || 0, vals.required && !field.value && errors.push(["required", field.name]), vals.variable && (variables[vals.variable] = field.value);
                    else if ("slider" === vals.type) field.value = 1 * $field.find("input").val() || 0, vals.variable && (variables[vals.variable] = field.value);
                    else if ("checkbox-list" === vals.type || "checkbox-visual" === vals.type) {
                      field.value = [];
                      var indexes = [];
                      $field.find("input[type=checkbox]").each(function(e) {
                        try {
                          $(this).prop("checked") && (field.value.push(vals.list[e].text), indexes.push(e))
                        } catch (r) {
                          error_handler(r, "libs_plp 6", arguments.callee)
                        }
                      }), field.value = field.value.join(", "), vals.required && !field.value && errors.push(["required", field.name]), vals.variable && (variables[vals.variable] = 0, indexes.forEach(function(e) {
                        try {
                          variables[vals.variable] += 1 * vals.list[e].value || 0
                        } catch (r) {
                          error_handler(r, "libs_plp 7", arguments.callee)
                        }
                      }))
                    } else if ("checkbox-input" === vals.type) {
                      var checked = $field.find("input[type=checkbox]").prop("checked");
                      vals.required && !checked && errors.push(["required", field.name]), field.value = checked ? language.yes : language.no, vals.variable && (variables[vals.variable] = 1 * (checked ? vals.valueOn : vals.valueOff) || 0)
                    } else if ("privacy-checkbox" === vals.type) {
                      var checked = $field.find("input[type=checkbox]").prop("checked");
                      vals.required && !checked && errors.push(["required", vals.privacy_checkbox.replace(/[<>]/g, "")]), field.value = checked ? language.yes : language.no, vals.variable && (variables[vals.variable] = 1 * (checked ? vals.valueOn : vals.valueOff) || 0)
                    } else if ("radio-list" === vals.type || "radio-visual" === vals.type) {
                      var index = $field.find("input").index($field.find("input:checked"));
                      index >= 0 ? field.value = vals.list[index].text : (field.value = "", vals.required && errors.push(["required", field.name])), vals.variable && (index >= 0 ? variables[vals.variable] = vals.list[index].value : variables[vals.variable] = 0)
                    } else if ("select-menu" === vals.type) {
                      var val = $field.find("select").val();
                      if ("" !== val) {
                        var index = 1 * val;
                        field.value = vals.list[index].text
                      }
                      vals.required && !field.value && errors.push(["required", field.name]), vals.variable && (index >= 0 ? variables[vals.variable] = vals.list[index].value : variables[vals.variable] = 0)
                    } else if ("file" === vals.type) field.value = $field.data("result"), vals.required && !field.value && errors.push(["required", field.name]);
                    else if ("hidden" === vals.type) field.value = $field.find("input").val();
                    else if ("result" === vals.type) {
                      var _result = 0;
                      try {
                        var scope = _.extend({
                          round: Math.round,
                          min: Math.min,
                          max: Math.max,
                          ceil: Math.ceil,
                          floor: Math.floor,
                          pow: Math.pow,
                          abs: Math.abs,
                          random: Math.random
                        }, variables);
                        with(scope) _result = eval(vals.formula);
                        "number" == typeof _result && (_result = parseFloat(_result.toFixed(2))), "undefined" == typeof _result && (_result = 0), _.isNaN(_result) && (_result = 0)
                      } catch (e) {
                        console.error("Error in formula", e), _result = 0
                      }
                      field.value = vals.format.replace("%result%", _result), $field.find("[plp-field-result]").text(field.value), vals.variable && (variables[vals.variable] = _result)
                    } else if ("html" === vals.type) {
                      var scope = _.cloneDeep(variables),
                        template = $field.data("template");
                      template || (template = _.template(vals.template), $field.data("template", template)), $field.find("[plp-field-template]").html(template(scope))
                    }
                  } catch (jswrap_exception) {
                    error_handler(jswrap_exception, "libs_plp 5", arguments.callee)
                  }
                }), errors = errors.map(function(e) {
                  try {
                    return language[e[0]].replace("%field%", e[1])
                  } catch (r) {
                    error_handler(r, "libs_plp 8", arguments.callee)
                  }
                })
              } catch (jswrap_exception) {
                error_handler(jswrap_exception, "libs_plp 4", arguments.callee)
              }
            }), setTimeout(function() {
              try {
                $form.trigger("input")
              } catch (e) {
                error_handler(e, "libs_plp 9", arguments.callee);
              }
            }, 1), $form.on("reset", function() {
              try {
                setTimeout(function() {
                  try {
                    $form.trigger("input")
                  } catch (e) {
                    error_handler(e, "libs_plp 11", arguments.callee)
                  }
                }, 1)
              } catch (e) {
                error_handler(e, "libs_plp 10", arguments.callee)
              }
            }), $form.on("validate", function(e, r) {
              try {
                $form.trigger("input"), errors.length > 0 ? ($form.trigger("submit-error"), plp.msg_error(language.validate, errors.join("\n"))) : r()
              } catch (l) {
                error_handler(l, "libs_plp 12", arguments.callee)
              }
            }), $form.on("submit", function(e) {})
          } catch (jswrap_exception) {
            error_handler(jswrap_exception, "libs_plp 2", arguments.callee)
          }
        })
      } catch (jswrap_exception) {
        error_handler(jswrap_exception, "libs_plp 0", arguments.callee)
      }
    }), plp._screen = function() {
      try {
        if (plp.screen) return;
        var e = document.body.clientWidth,
          r = plp.screenSizes && plp.screenSizes.sm || 768,
          l = plp.screenSizes && plp.screenSizes.md || 992,
          a = plp.screenSizes && plp.screenSizes.lg || 1200,
          t = r - 1,
          i = l - 1,
          n = a - 1;
        "screens-xs" === plp.screens ? plp.screen = "xs" : "screens-sm" === plp.screens ? plp.screen = "sm" : "screens-md" === plp.screens ? plp.screen = "md" : "screens-lg" === plp.screens ? plp.screen = "lg" : "screens-xs-sm" === plp.screens ? e > r ? plp.screen = "sm" : e <= t && (plp.screen = "xs") : "screens-xs-md" === plp.screens ? e > l ? plp.screen = "md" : e <= i && (plp.screen = "xs") : "screens-xs-lg" === plp.screens ? e > a ? plp.screen = "lg" : e <= n && (plp.screen = "xs") : "screens-sm-md" === plp.screens ? e > l ? plp.screen = "md" : e <= i && (plp.screen = "sm") : "screens-sm-lg" === plp.screens ? e > a ? plp.screen = "lg" : e <= n && (plp.screen = "sm") : "screens-md-lg" === plp.screens ? e > a ? plp.screen = "lg" : e <= n && (plp.screen = "md") : "screens-xs-sm-md" === plp.screens ? e > l ? plp.screen = "md" : e > r && e <= i ? plp.screen = "sm" : e <= t && (plp.screen = "xs") : "screens-xs-sm-lg" === plp.screens ? e > a ? plp.screen = "lg" : e > r && e <= n ? plp.screen = "sm" : e <= t && (plp.screen = "xs") : "screens-xs-md-lg" === plp.screens ? e > a ? plp.screen = "lg" : e > l && e <= n ? plp.screen = "md" : e <= i && (plp.screen = "xs") : "screens-sm-md-lg" === plp.screens ? e > a ? plp.screen = "lg" : e > l && e <= n ? plp.screen = "md" : e <= i && (plp.screen = "sm") : "screens-xs-sm-md-lg" === plp.screens && (e > a ? plp.screen = "lg" : e > l && e <= n ? plp.screen = "md" : e > r && e <= i ? plp.screen = "sm" : e <= t && (plp.screen = "xs")), [].slice.call(document.body.childNodes).forEach(function(e) {
          try {
            e.className && e.className.indexOf("area") >= 0 && e.classList.add("screen-" + plp.screen)
          } catch (r) {
            error_handler(r, "libs_plp 1", arguments.callee)
          }
        })
      } catch (o) {
        error_handler(o, "libs_plp 0", arguments.callee)
      }
    }, $(function() {
      try {
        plp._screen(), $("script.adaptive").each(function() {
          try {
            var e = $(this).parent().contents(),
              r = e[e.index(this) + 1];
            8 === r.nodeType && r.parentNode.removeChild(r), this.parentNode.removeChild(this)
          } catch (l) {
            error_handler(l, "libs_plp 3", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 2", arguments.callee)
      }
    }), $(function() {
      try {
        $(".node[bgparticles]").each(function() {
          try {
            var e = $(this),
              r = JSON.parse(e.attr("bgparticles"));
            e.removeAttr("bgparticles"), e.find(".particles-js-canvas-el").remove();
            var l = e.find(">.wrapper1"),
              a = particlesJS(l.get(0), r);
            a.canvas.el.style.borderRadius = l.css("border-radius"), a.interactivity.events.onclick.handler = function(e) {
              try {
                var r = $(e.target);
                if (r.parents(".modal.in").length) return this.canvas.el === r.parentsUntil(".cont").parent().find(".particles-js-canvas-el").get(0)
              } catch (l) {
                error_handler(l, "libs_plp 2", arguments.callee)
              }
            }
          } catch (t) {
            error_handler(t, "libs_plp 1", arguments.callee)
          }
        })
      } catch (e) {
        error_handler(e, "libs_plp 0", arguments.callee)
      }
    }), $(function() {
      try {
        var e = !1,
          r = $("<div></div>"),
          l = $(".section.fixation-top:visible:first"),
          a = l.attr("data-opacity");
        l.length && $(document).on("ready scroll", function(t) {
          try {
            var i = $(document).scrollTop();
            if (e) n = r.offset().top, i <= n && (r.remove(), l.css("opacity", 1), l.removeClass("fixed"), e = !1);
            else {
              var n = l.offset().top;
              i > n && (r.css("height", l.height()).insertAfter(l), l.css("opacity", a), l.addClass("fixed"), e = !0)
            }
          } catch (o) {
            error_handler(o, "libs_plp 1", arguments.callee)
          }
        })
      } catch (t) {
        error_handler(t, "libs_plp 0", arguments.callee)
      }
    }), $(function() {
      try {
        var e = !1,
          r = $("<div></div>"),
          l = $(".section.fixation-bottom:visible:first"),
          a = l.attr("data-opacity");
        if (l.length) {
          if (l.next().hasClass("section-helper")) return l.css("opacity", a), void l.addClass("fixed");
          $(document).on("ready scroll", function(t) {
            try {
              var i = $(document).scrollTop() + $(window).height();
              if (e) {
                var n = r.offset().top + l.outerHeight();
                i < n && (r.remove(), l.css("opacity", 1), l.removeClass("fixed"), e = !1)
              } else {
                var n = l.offset().top + l.outerHeight();
                i > n && (r.insertAfter(l), l.css("opacity", a), l.addClass("fixed"), e = !0)
              }
            } catch (o) {
              error_handler(o, "libs_plp 3", arguments.callee)
            }
          })
        }
      } catch (t) {
        error_handler(t, "libs_plp 2", arguments.callee)
      }
    })
}($);
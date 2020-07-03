<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'scotruss-builders' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'scotruss-builders_admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'admin' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}CtOEW46azaDtJ(A6 neI}u^XF|!FU9Y&O$`-(Y[1^W=Mrc2XeV1Sb^u@Uue/ezN' );
define( 'SECURE_AUTH_KEY',  'c)Rg^_Fe$0=kgVYrU>8nV.p/m%pw_GhcJXohp9bsM=&s[t4^*nPgCz&Bf$@;3&[<' );
define( 'LOGGED_IN_KEY',    'L~>{q$zh.O==i;(i$t@69ro}U@#W0e;-ri=uj3M*sKimh/b}1]TJ#L,aZc2s0<0m' );
define( 'NONCE_KEY',        '5!-GN)4~#tct??&~U.Tb-PhI_&{OvzD+-u;Y*n)v6]FQJLbt(Gor&RRDDgf/d@I>' );
define( 'AUTH_SALT',        'Ve+3]4s$:hw#+d}xR a/WbUk@!t?_!0$;a2]e|mccr`>gQcyFyDITEtLCc_y{9<I' );
define( 'SECURE_AUTH_SALT', 'LAK@z7:Ny~^E%kjyF$wC0f6`xiLRezhf;x?KS`dEaQGis< Y J4AomTMxtj$jUMO' );
define( 'LOGGED_IN_SALT',   'Od13!-0e(=vkxIIFa_2eRy~+B#+jv9GV7[C>4<<K)T3T4(h@4oCco(Xt]x?,a/(U' );
define( 'NONCE_SALT',       'FGf&?&$1t7{DI@7V-L.]/v$yaufh/<iR(Ep}v%<RLzY*$!g8RL)3[4M EMs^kMNI' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );

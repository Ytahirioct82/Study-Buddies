\c study_bud;



INSERT INTO study_groups (name, main_focus, formed, contact) VALUES
('Brest Computer Club', 'JavaScript', '2016-01-01', '(453)-456-7890'),
('Papers We Love', 'photography', '2018-11-09', '(382)-456-2063'),
('Georgia Tech ', 'Tech', '2021-12-08', '(236)-697-8632'),
('WOMEN IN COMPUTING', 'machine learning', '2020-09-05', '(293)-496-7620'),
('Code the Gap', 'Paython', '2011-10-29', '(673)-567-3990');


INSERT INTO events (study_group_id, name, virtual_meeting_link, start_time, end_time, number_of_attendees, cancelled) VALUES
(1, 'Tech N9ne', 'https://www.eventbrite.com', '2016-01-01 10:30:00', '2016-01-01 11:30:00', 30, true),
(1, 'Queen', 'https://www.eventbrite.com', '2017-04-08 12:45:00', '2017-04-08 13:45:00', 55, true),
(1, 'Webinar', 'https://www.eventbrite.com', '2018-07-10 15:20:00', '2018-07-10 16:20:00', 100, true),
(1, 'Robofun', 'https://www.eventbrite.com', '2020-05-28 17:05:00', '2020-05-28 19:05:00', 77, true),
(2, 'DGI', 'https://www.eventbrite.com', '2021-04-28 13:30:00', '2021-04-28 15:00:00', 80, true),
(2, 'CCM', 'https://www.eventbrite.com', '2020-01-08 19:07:00', '2020-01-08 20:07:00', 25, false),
(2, 'Snap Robotics', 'https://www.eventbrite.com', '2022-04-28 2:00:00', '2022-04-28 3:00:00', 44, false),
(2, 'Scratch', 'https://www.eventbrite.com', '2018-07-28 12:45:00', '2018-07-28 13:45:00', 83, false),
(3, 'Minecraft', 'https://www.eventbrite.com', '2018-02-28 17:55:00', '2018-02-28 18:55:00', 99, false),
(4, 'Kinetic', 'https://www.eventbrite.com', '2022-04-23 13:30:00', '2022-04-23 15:30:00', 105, true),
(5, 'Ardsley', 'https://www.eventbrite.com', '2018-07-15 19:15:00', '2018-07-15 20:15:00', 200, false),
(5, 'Roblox', 'https://www.eventbrite.com', '2014-04-19 15:20:00', '2014-04-19 16:20:00', 45, false),
(5, 'Austin Coding', 'https://www.eventbrite.com', '2018-11-09 16:10:00', '2018-11-09 18:10:00', 77, false);

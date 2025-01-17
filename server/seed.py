from random import choice as rc, randint
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from faker import Faker
from app import app
from models import db, User, Stylist, Product, Location, Service, Appointment, Review, Inspo
from datetime import datetime

fake = Faker()

with app.app_context():

    print("Deleting data...")
    User.query.delete()
    Stylist.query.delete()
    Product.query.delete()
    Location.query.delete()
    Service.query.delete()
    Appointment.query.delete()
    Review.query.delete()
    Inspo.query.delete()
    
    print("Creating users...DONE")
    gamora = User(username= 'gamora', email = "gamora@gmail.com", password = "gamora")
    wanda = User(username= 'wanda', email = "wanda@gmail.com", password = "wanda")
    natalia = User(username= 'natalia', email = "natalia@gmail.com", password = "natalia")
    nebula = User(username= 'nebula', email = "nebula@gmail.com", password = "nebula")
    pepper = User(username= 'pepper', email = "pepper@gmail.com", password = "pepper")
    shuri = User(username= 'shuri', email = "shuri@gmail.com", password = "shuri")
    janet = User(username= 'janet', email = "janet@gmail.com", password = "janet")

    users = [gamora, wanda, natalia, nebula, pepper, shuri, janet]
    db.session.add_all(users)
    db.session.commit()

    print("Creating Locations...DONE")
    l1 = Location(name='East', image='https://i.pinimg.com/474x/9a/11/a5/9a11a516963b9f7853df969a4af72785.jpg', address='11 Broadway @nd Floor, New York, NY 10004')
    l2 = Location(name='West', image='https://i.pinimg.com/474x/b5/ba/5e/b5ba5e97afb368b91b8eda6189a19a57.jpg', address='2228 Blake St #100, Denver, CO 80205')

    locations = [l1, l2]
    db.session.add_all(locations)
    db.session.commit()

    print("Creating Stylists...DONE")
    s1 = Stylist(name = 'Hope', job= 'Hair Stylist', image='https://i.pinimg.com/474x/c0/d6/e3/c0d6e3a666a3cc0e343712880a250339.jpg', type = 1, bio= "Hope has been a stylist for 6 years. She specializes in lived-in color and balayages.", location_id = l1.id)
    s2 = Stylist(name = 'Jenna', job= 'Hair Stylist', image='https://i.pinimg.com/474x/62/64/47/626447b9b1c41881d4f80ecd56372bb8.jpg', type = 1, bio= "Jenna is one of our newest stylists! She specializes in red hair and fantasy colors.", location_id = l1.id)
    s3 = Stylist(name = 'Rebekah', job= 'Hair Stylist', image='https://i.pinimg.com/474x/eb/7d/55/eb7d558cab13acd4626fa15d71814835.jpg', type = 1, bio= "Rebekah is our go to blonde babe! She has been with Elysian for 4 years but has been a stylist for 8 years!", location_id = l1.id)
    s4 = Stylist(name = 'Caroline', job= 'Hair Stylist', image='https://i.pinimg.com/474x/4c/47/5a/4c475ab64479f060f4766a7010dd912e.jpg', type = 1, bio= "Caroline is a stylist and our social media babe! She has been with us for 2 years and we love the creative energy she brings to the group.", location_id = l1.id)
    s5 = Stylist(name = 'Hayley', job= 'Hair Stylist', image='https://i.pinimg.com/474x/7b/c9/af/7bc9af6408d85006a30dd1935c584c03.jpg', type = 1, bio= "Hayley is one of our two owners and she works behind the chair! We love her ability to teach and the calmness she brings into the salon!", location_id = l1.id)
    s6 = Stylist(name = 'Divina', job= 'Hair Stylist', image='https://i.pinimg.com/564x/6f/1d/77/6f1d77afaf6f8a907d2db496edbef165.jpg', type = 1, bio= "Divina has been a stylist with us for 3 years! Her consultations are extremely thorough, ensuring she is always giving her clients her best!", location_id = l2.id)
    s7 = Stylist(name = 'Bonnie', job= 'Hair Stylist', image='https://i.pinimg.com/474x/7d/d1/3e/7dd13e2122da684d21d28a774f219fb0.jpg', type = 1, bio= "Bonnie is our go to curly haired babe. She specializes in all things texture and even hosts curly hair classes at Elysian.", location_id = l1.id)
    s8 = Stylist(name = 'Lexi', job= 'Hair Stylist', image='https://i.pinimg.com/474x/98/06/0d/98060da11aaedcde1cd2e76e18e301a9.jpg', type = 1, bio= "Lexi is our go to updo gal! She’s mostly outside of the salon, working at events and weddings.", location_id = l1.id)
    s9 = Stylist(name = 'Katherine', job= 'Hair Stylist', image='https://i.pinimg.com/474x/86/27/73/862773b9569866368be547c4a3f5d2ae.jpg', type = 1, bio= "Katherine has been doing hair for 6 years! She is our salon trend setter!", location_id = l2.id)
    s10 = Stylist(name = 'Isabel', job= 'Hair Stylist', image='https://i.pinimg.com/474x/3c/94/a6/3c94a6b7a5343d4d12f212f48c1daa63.jpg', type = 1, bio= "Isabel has been a color specialist for 7 years! She hosts all of our color classes here at Elysian!", location_id = l2.id)
    s11 = Stylist(name = 'Jane-Anne', job= 'Hair Stylist', image='https://i.pinimg.com/474x/bc/88/8f/bc888f3adf32450734badce55103ca05.jpg', type = 1, bio= "Jane-anne has been a stylist with us for 3 years. She specializes in curly and wavy hair styles!", location_id = l2.id)
    s12 = Stylist(name = 'Esther', job= 'Hair Stylist', image='https://i.pinimg.com/474x/ec/f7/3a/ecf73a8c48c4a3307e8107bd3ce0f3a5.jpg', type = 1, bio= "Esther is a part-time stylist at Elysian! She spends the rest of her time outside the salon with her 5 adorable kiddos!", location_id = l2.id)
    s13 = Stylist(name = 'Freya', job= 'Hair Stylist', image='https://i.pinimg.com/474x/5e/86/97/5e8697d0cdfeaf5682c5d293d2f6cd3a.jpg', type = 1, bio= "Freya is one of our two owners! She hosts all of our cutting classes here at Elysian.", location_id = l2.id)
    s14 = Stylist(name = 'Vickie', job= 'Hair Stylist', image='https://i.pinimg.com/474x/5f/0a/52/5f0a5241cd1a1f026d60177b497eb9e7.jpg', type = 1, bio= "Vickie is a part-time stylist at Elysian! When she’s not behind the chair, she spends her time modeling for Redken!", location_id = l1.id)
    s15 = Stylist(name = 'Elena', job= 'Hair Stylist', image='https://i.pinimg.com/474x/9d/9d/a6/9d9da6552f59dfd4b79464571abd3f3a.jpg', type = 1, bio= "Elena is one of our newest stylists here! She is always smiling and radiating joy!", location_id = l2.id)
    s16 = Stylist(name = 'Isabelle', job= 'Hair Stylist', image='https://i.pinimg.com/474x/5f/3a/7b/5f3a7b599f3beb2d6022f66ed2ae0a67.jpg', type = 1, bio= "Isabel is a stylist and our salon photog. She is such a joy to be around and brings lots of great ideas into the salon.", location_id = l2.id)
    s17 = Stylist(name = 'Josie', job= 'Esthetician', image='https://i.pinimg.com/474x/eb/df/e1/ebdfe188782c377fc70beb0ac3e951d2.jpg', type = 2, bio= "Josie is one of our estheticians here at Elysian. She loves doing waxes and tints!", location_id = l1.id)
    s18 = Stylist(name = 'Camile', job= 'Esthetician', image='https://i.pinimg.com/474x/71/52/cf/7152cf99564fcd6b6106ba21d8d2c84f.jpg', type = 2, bio= "Camile was the first esthetician we hired. She’s trained all of our other Elysian esthetician’s!", location_id = l1.id)
    s19 = Stylist(name = 'Carol', job= 'Esthetician', image='https://i.pinimg.com/474x/02/ee/9f/02ee9f9f53fca5c295e3cdae6d7df569.jpg', type = 2, bio= "Carol is an esthetician here at Elysian. She gives the most relaxing facials!", location_id = l1.id)
    s20 = Stylist(name = 'Abby', job= 'Esthetician', image='https://i.pinimg.com/474x/b2/26/f1/b226f16d3babda307ba73c9b8a52f47f.jpg', type = 2, bio= "Abby has been an esthetician for 9 years! We love her bubbly energy and her ability to connect with her clients.", location_id = l1.id)
    s21 = Stylist(name = 'Anna', job= 'Esthetician', image='https://i.pinimg.com/474x/eb/a8/41/eba84166b14cd8008f0568f559ad9ea4.jpg', type = 2, bio= "Anna is an esthetician here at Elysian. She specializes in full body waxes and has even started creating her own wax product!", location_id = l2.id)
    s22 = Stylist(name = 'Lizzie', job= 'Esthetician', image='https://i.pinimg.com/474x/b9/81/81/b981812ec95c8b23cc6f8d71f61f2b4d.jpg', type = 2, bio= "Lizzie is our go to lash tech! She’s been doing lashes for 5 years and has really mastered the craft of flawless, natural lashes!", location_id = l2.id)
    s23 = Stylist(name = 'Sheila', job= 'Esthetician', image='https://i.pinimg.com/474x/e8/f9/0a/e8f90a42f9a294cdcdb0a794d633efd3.jpg', type = 2, bio= "Shiela is a part-time esthetician here at Elysian. When she's not waxing, she's working as a TA at a school in town", location_id = l2.id)
    s24 = Stylist(name = 'Liv', job= 'Esthetician', image='https://i.pinimg.com/474x/9f/1b/9e/9f1b9e4dff8adbe3a44a79f20878ad0b.jpg', type = 2, bio= "Liv is a medical esthetician. She provides the best faciels and advice for at home care!", location_id = l2.id)

    stylists = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24]
    db.session.add_all(stylists)
    db.session.commit()

    print("Creating Products...DONE")
    p1 = Product(name= 'Anti-Dandruff Shampoo', type = 1 , image = 'https://cld.accentuate.io/7048188428358/1669941760922/Anti-Dandruff_Site_Assets_Product_Lifestyle_Images_Desktop_1600x1620_1.jpg?v=1669941760923&options=w_1600', price = 36 , description= 'Best to combat dry scalp or flaking.')
    p2 = Product(name= 'Detox Shampoo', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4439539646534%2F1612578976664%2FProduct-Detox-1.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Good to use to cleanse build-up on the hair strands.')
    p3 = Product(name= 'Fine Hair Shampoo', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4406035939398%2F1614122939245%2FProduct-Fine-Shampoo-2.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Best for people with thin hair.')
    p4 = Product(name= 'Fine Hair Conditioner', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4406038167622%2F1614109072843%2FProduct-Fine-Conditioner.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Best for people with thin hair.')
    p5 = Product(name= 'Medium Hair Shampoo', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4406041313350%2F1614055752830%2FProduct-Medium-Shampoo-3.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Best for people with a normal amount of hair.')
    p6 = Product(name= 'Medium Hair Conditioner', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4406043312198%2F1614186750362%2FProduct-Medium-Condtioner-1.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Best for people with a normal amount of hair.')
    p7 = Product(name= 'Thick Hair Shampoo', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4406045114438%2F1614068841903%2FProduct-Thick-Shampoo-1.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Best for people with thick hair.')
    p8 = Product(name= 'Thick Hair Conditioner', type = 1 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4406044196934%2F1614064269490%2FPDP-Testimonial-Thick-Conditioner-720x814.jpg%3Fv%3D0&c_options=w_720', price = 32 , description= 'Best for people with thick hair.')
    p9 = Product(name= 'Scalp Serum', type = 2 , image = 'https://cld.accentuate.io/6897888952390/1651185924130/THEOUAI_Site_AssetsSERUM_Thumbnail_-Desktop_1920X1150.jpg?v=0&options=w_1600', price = 52 , description= 'Good to use to balance the PH of your scalp.')
    p10 = Product(name= 'Thick and Full Supplements', type = 2 , image = 'https://cld.accentuate.io/6897522442310/1651130129920/THEOUAI_Site_AssetsSUPPLEMENTS_Desktop_-1920X1366-.jpg?v=0&options=w_1600', price = 42 , description= 'Great for thickening up the hair, Recommend using for 3 months before seeing results.')
    p11 = Product(name= 'Fine to Medium Hair Treatment Masque', type = 2 , image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4776328265798%2F1614492027640%2FPDP-Desktop-Treatment-Masque-Fine-Med.jpg%3Fv%3D0&c_options=w_1600', price = 38 , description= 'A masque for thin to medium hair.')
    p12 = Product(name= 'Thick Hair Treatment Masque', type = 2, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4776327970886%2F1614054208287%2FPDP-Treatment-Masque-Thick-3.jpg%3Fv%3D0&c_options=w_1600', price = 38 , description= 'A masque for medium to thick hair.')
    p13 = Product(name= 'Volume Spray', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F143373828111%2F1614047554058%2FPDP-Desktop-Volume-Spray.jpg%3Fv%3D0&c_options=w_1600', price = 26 , description= 'Used to add lift at the root.')
    p14 = Product(name= 'Wave Spray', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4070486660%2F1614044342498%2FPDP-Desktop-Wave-Spray.jpg%3Fv%3D0&c_options=w_1600', price = 28 , description= 'Best for getting the natural beach wave look.')
    p15 = Product(name= 'Texturizing Spray', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4070512452%2F1614061896169%2FPDP-Desktop-Texturizing-Hair-Spray-1.jpg%3Fv%3D0&c_options=w_1600', price = 28 , description= 'Used to add fullness and grip to the ends of the hair.')
    p16 = Product(name= 'Air Dry Foam', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F523725209615%2F1613696003111%2FProduct-Air-Dry-Foam-4.jpg%3Fv%3D0&c_options=w_1600', price = 28 , description= 'Use on wet hair to get a smooth + sleek blowout in less time.')
    p17 = Product(name= 'Rose Hair + Body Oil', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F11079958671%2F1614070262177%2FPDP-Desktop-Rose-Hair-Body-Oil-1.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Use to add shine on hair + skin.')
    p18 = Product(name= 'Leave-in Conditioner', type = 3, image = 'https://cld.accentuate.io/164220239887/1657578720211/5.1_DESKTOP_LIC_1600x1620.jpg?v=0&options=w_1600', price = 30 , description= 'Best for dry hair to add extra moisture to the ends of the hair.')
    p19 = Product(name= 'Curl Crème', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4828525658182%2F1614036541954%2FProduct-Curl-Creme-2-1600x1620.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Leave-in cream for curly hair to eliminate frizz.')
    p20 = Product(name= 'Finishing Crème', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4070540804%2F1613786115722%2FProduct-Finishing-Creme-0.jpg%3Fv%3D0&c_options=w_1600', price = 26 , description= 'Leave-in cream to add shine. Not recommended for thin hair.')
    p21 = Product(name= 'Super Dry Shampoo', type = 3, image = 'https://cld.accentuate.io/3958372237382/1657579398482/15.1_DESKTOP_Hair_Spray_1600x1620.jpg?v=0&options=w_1600', price = 26 , description= 'Use to elimate grease on the scalp.')
    p22 = Product(name= 'Matte Pomade', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6293330308%2F1614109753465%2FProduct-Matte-Pomade.jpg%3Fv%3D0&c_options=w_1600', price = 26 , description= 'Best used to shape + style short hair.')
    p23 = Product(name= 'Hair Oil', type = 3, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4070460164%2F1613689204631%2FProduct-Hair-Oil-1.jpg%3Fv%3D0&c_options=w_1600', price = 30 , description= 'Use to add shine on hair.')
    p24 = Product(name= 'Scalp + Body Scrub', type = 4, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F1395105955910%2F1614064855465%2FPDP-Desktop-Scalp-Body-Scrub.jpg%3Fv%3D0&c_options=w_1600', price = 40 , description= 'Use to exfoliate and remove sry skin from scalp + skin.')
    p25 = Product(name= 'St. Barts Scalp + Body Scrub', type = 4, image = 'https://cld.accentuate.io/6598668484678/1663187631380/St_Barts_SBS_Updated_PDP_Product_Image_Desktop_1600x1620-1.jpg?v=1663187631380&options=w_1600', price = 40 , description= 'Use to exfoliate and remove sry skin from scalp + skin.')
    p26 = Product(name= 'St. Barts Body Cleanser', type = 4, image = 'https://cld.accentuate.io/7091182731334/1676663406715/St_Barts_P_PagesSt-Barts-Cleanser-Desktop-1600-x-1620-1.jpg?v=1676663406715&options=w_1600', price = 28 , description= 'Use to cleanse the skin and add shine without feeling oily.')
    p27 = Product(name= 'Melrose Body Cleanser', type = 4, image = 'https://www.sephora.com/productimages/sku/s2537405-main-zoom.jpg?imwidth=630', price = 28 , description= 'Use to cleanse the skin and add shine without feeling oily.')
    p28 = Product(name= 'Dean Street Body Cleanser', type = 4, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F3983882321990%2F1614494834627%2FProduct-Body-Cleanser-1.jpg%3Fv%3D0&c_options=w_1600', price = 28 , description= 'Use to cleanse the skin and add shine without feeling oily.')
    p29 = Product(name= 'St. Barts Body Crème', type = 4, image = 'https://cld.accentuate.io/7091183583302/1676663605114/St_Barts_P_PagesSt-Barts-Creme-Desktop-1600-x-1620-1.jpg?v=1676663605115&options=w_1600', price = 38 , description= 'Adds additional moisture to the skin.')
    p30 = Product(name= 'Melrose Place Body Crème', type = 4, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F6581828583494%2F1618252693936%2FPDP-Desktop-Melrose-Place-1.jpg%3Fv%3D0&c_options=w_1600', price = 38 , description= 'Adds additional moisture to the skin.')
    p31 = Product(name= 'Shibuya Body Crème', type = 4, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F3983896543302%2F1614022228566%2FProduct-Body-Creme-4-1600x1620.jpg%3Fv%3D0&c_options=w_1600', price = 38 , description= 'Adds additional moisture to the skin.')
    p32 = Product(name= 'Hand Wash', type = 4, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4710983598150%2F1614036838408%2FProduct-Hand-Wash-1.jpg%3Fv%3D0&c_options=w_1600', price = 32 , description= 'Elimates dirt without drying out the skin.')
    p33 = Product(name= 'Hand Lotion', type = 4, image = 'https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F4710983827526%2F1614027631181%2FPDP-Testimonial-Hand-Lotion-720x814.jpg%3Fv%3D0&c_options=w_720', price = 32 , description= 'Best used on hands + feet to add lasting moisture.')
    p34 = Product(name= 'Hair Comb', type = 5, image = 'https://cld.accentuate.io/6962706415686/1657823754446/Merch_Site_Asset_Hair_Comb_Product_Lifestyle_Image_Desktop_1600x1620_1.jpg?v=0&options=w_1600', price = 14 , description= 'Quarts comb for straight or wavy textures.')
    p35 = Product(name= 'Hair Pick', type = 5, image = 'https://cld.accentuate.io/6962708971590/1657824011161/Merch_Site_Asset_Hair_Pick_Product_Lifestyle_Image_Desktop_1600x1620_1.jpg?v=0&options=w_1600', price = 14 , description= 'Quarts pick for wavy or curly textures.')
    p36 = Product(name= 'Scalp Scrubber', type = 5, image = 'https://cld.accentuate.io/6962709856326/1657824155216/Merch_Site_Asset_Scalp_Scrubber_Product_Lifestyle_Image_Desktop_1600x1620_3.jpg?v=0&options=w_1600', price = 14 , description= 'Use to stimilate the scalp to promote growth and blod-flow.')
    
    products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36]
    db.session.add_all(products)
    db.session.commit()

    print("Creating Services...DONE")
    sv1 = Service(name= 'Style', category = 'Style + Cuts', price = 32 , length= 45, type= 1)
    sv2 = Service(name= 'Occasion Updo', category = 'Style + Cuts', price = 92 , length= 45, type= 1)
    sv3 = Service(name= 'Wash + Style', category = 'Style + Cuts', price = 60 , length= 60, type= 1)
    sv4 = Service(name= 'Deep Conditioning Treatment', category = 'Style + Cuts', price = 32 , length= 15, type= 1)
    sv5 = Service(name= 'Toner Add On', category = 'Color', price = 32 , length= 30, type= 1)
    sv6 = Service(name= 'Haircut + Style', category = 'Style + Cuts', price = 80 , length= 75, type= 1)
    sv7 = Service(name= 'Curly Haircut + Style', category = 'Style + Cuts', price = 90 , length= 90, type= 1)
    sv8 = Service(name= 'Root Retouch', category = 'Color', price = 180 , length= 120, type= 1)
    sv9 = Service(name= 'Blonde Retouch', category = 'Color', price = 220 , length= 150, type= 1)
    sv10 = Service(name= 'All Over Color', category = 'Color', price = 220 , length= 150, type= 1)
    sv11 = Service(name= 'Partial Highlight', category = 'Color', price = 240 , length= 195, type= 1)
    sv12 = Service(name= 'Full Highlight', category = 'Color', price = 360 , length= 225, type= 1)
    sv13 = Service(name= 'Balayage', category = 'Color', price = 396 , length= 255, type= 1)
    sv14 = Service(name= 'Lived in Color', category = 'Color', price = 440 , length= 285, type= 1)
    sv15 = Service(name= 'Full Color Correction', category = 'Color', price = 500 , length= 120, type= 1)
    sv16 = Service(name= 'Bridal Trial', category = 'Weddings', price = 86 , length= 60, type= 1)
    sv17 = Service(name= 'Bridal Style', category = 'Weddings', price = 126 , length= 90, type= 1)
    sv18 = Service(name= 'Bridesmaid Style', category = 'Weddings', price = 100 , length= 75, type= 1)
    sv19 = Service(name= 'Bridal Makeup', category = 'Weddings', price = 120 , length= 90, type= 2)
    sv20 = Service(name= 'Bridesmaid Makeup', category = 'Weddings', price =  90, length= 60, type= 2)
    sv21 = Service(name= 'Travel Fee', category = 'Weddings', price = 20 , length= 20 )
    sv22 = Service(name= '30 Minute Facial', category = 'Skin', price = 76 , length= 30, type= 2)
    sv23 = Service(name= '45 Minute Facial', category = 'Skin', price = 96 , length= 45, type= 2)
    sv24 = Service(name= '60 Minute Facial', category = 'Skin', price = 116 , length= 60, type= 2)
    sv25 = Service(name= 'Dermaplane', category = 'Skin', price = 32 , length= 30, type= 2)
    sv26 = Service(name= 'Peel', category = 'Skin', price = 26 , length= 30, type= 2)
    sv27 = Service(name= 'Brow Wax', category = 'Wax', price = 20 , length= 15, type= 2)
    sv28 = Service(name= 'Lip Wax', category = 'Wax', price = 16 , length= 15, type= 2)
    sv29 = Service(name= 'Brazillian', category = 'Wax', price = 70 , length= 60, type= 2)
    sv30 = Service(name= 'Bikini', category = 'Wax', price = 50 , length= 45, type= 2)
    sv31 = Service(name= 'Full Arm Wax', category = 'Wax', price = 70 , length= 60, type= 2)
    sv32 = Service(name= 'Half Arm Wax', category = 'Wax', price = 50 , length= 30, type= 2)
    sv33 = Service(name= 'Full Leg Wax', category = 'Wax', price = 90 , length= 75, type= 2)
    sv34 = Service(name= 'Half Leg Wax', category = 'Wax', price = 70 , length= 45, type= 2)
    sv35 = Service(name= 'Brow Tint', category = 'Lashes + Brows', price = 100 , length= 15, type= 2)
    sv36 = Service(name= 'Brow Lamination', category = 'Lashes + Brows', price = 100 , length= 15, type= 2)
    sv37 = Service(name= 'Lash Lift', category = 'Lashes + Brows', price = 100 , length= 15, type= 2)
    sv38 = Service(name= 'Lash Tint', category = 'Lashes + Brows', price = 100 , length= 15, type= 2)
    sv39 = Service(name= 'Classic Lash Extentions', category = 'Lashes + Brows', price = 126 , length= 120, type= 2)
    sv40 = Service(name= 'Hybrid Lash Extentions', category = 'Lashes + Brows', price = 150 , length= 150, type= 2)
    
    services = [sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8, sv9, sv10, sv11, sv12, sv13, sv14, sv15, sv16, sv17, sv18, sv19, sv20, sv21, sv22, sv23, sv24, sv25, sv26, sv27, sv28, sv29, sv30, sv31, sv32, sv33, sv34, sv35, sv36, sv37, sv38, sv39, sv40]
    db.session.add_all(services)
    db.session.commit()

    # print("Creating Appointments...DONE")
    # a1 = Appointment(user_id= gamora.id, stylist_id = s5.id, service_id = sv5.id, dateTime= 2023-06-24 10:30:00)
    # a2 = Appointment(user_id= wanda.id, stylist_id = s1.id, service_id = sv8.id, dateTime= 2023-06-16 14:00:00)
    # a3 = Appointment(user_id= natalia.id, stylist_id = s9.id, service_id = sv30.id, dateTime= 2023-07-10 16:15:00)
    # a4 = Appointment(user_id= nebula.id, stylist_id = s7.id, service_id = sv15.id, dateTime= 2023-06-16 09:30:00)
    # a5 = Appointment(user_id= pepper.id, stylist_id = s3.id, service_id = sv11.id, dateTime= 2023-07-01 12:00:00)
    # a6 = Appointment(user_id= shuri.id, stylist_id = s11.id, service_id = sv10.id, dateTime= 2023-06-05 11:45:00)
    # a7 = Appointment(user_id= janet.id, stylist_id = s22.id, service_id = sv22.id, dateTime= 2023-06-05 14:45:00)

    # appointments = [a1, a2, a3, a4, a5, a6, a7]
    # db.session.add_all(appointments)
    # db.session.commit()

    print("Creating Reviews...DONE")
    r1 = Review(user_id= gamora.id, text ="Hayley is amazing! She is extremely kind and professional. I explained to her my issues with highlights I had previously done, and that I was a little fearful of having them done again. I showed her a picture of what I wanted and she knew exactly the look i was going for. She really listens and wants you to look your best. She definitely is a sweet soul. The results exceeded my expectations. I couldn't even believe it was my hair when we were done!")
    r2 = Review(user_id= wanda.id, text ="I have been going to the same stylist for over 20 years, but recently moved and had to find a new stylist in the area. I could not be more thrilled with my experience at Elysian!")
    r3 = Review(user_id= natalia.id, text ="Another wonderful haircut experience with Katherine!  I'm so happy I found Elysian Salon")
    r4 = Review(user_id= nebula.id, text ="The way Caroline made my hair look is just amazing! She was very attentive & listened to me when I said I wanted honey brown & not blonde! Everything down to the care & styling was just the best! She was very nice and very professional. If you want someone who knows what they are doing & who is very knowledgeable pleas go to her. She's a gem. I'm beyond happy with how my hair turned out. Though I can say the service was pretty pricey I can say that the outcome was on point. Thank you Caroline!")
    r5 = Review(user_id= pepper.id, text ="I was a tad apprehensive about getting my first balayage due to an unwelcoming experience at another salon. However, that feeling vanished quickly when I entered Elysian Salon. The staff was very welcoming, friendly, and attentive my entire time there. I couldn't be happier with my hair results. Rebekah was my hairstylist, I showed her a picture of what I wanted, and she delivered exactly that. Thank you so much for the beautiful work you did!")
    r6 = Review(user_id= shuri.id, text ="There just aren't enough words in the world to describe this place. Everyone is beyond professional, really personable, welcoming and the calibur of their skills is unfathomable. I've had plenty of bad hair experiences in the past, but this place never disappoints. Divina explained everything to me, answered all my hair questions, listened to what I wanted and also offered her professional hair coloring opinions based on my tone, face shape etc. Absolutely dreamy! This is what you call next level hair design. I'd suggest you make your way there pronto!")
    r7 = Review(user_id= janet.id, text ="Lizzie knew exactly the kind of skin service I needed and wanted after so many years of spending time (and money!) in different salons. I recommend Elysian Salon wholeheartedly. I only know Lizzie, but the other girls in the salon appear to love what they do and care about their clients. A great salon and a talented staff and leader.")

    reviews = [r1, r2, r3, r4, r5, r6, r7]
    db.session.add_all(reviews)
    db.session.commit()

    print("Creating Inspo Pics...")
    i1 = Inspo(stylist_id = s5.id, image = "https://i.pinimg.com/474x/04/f5/d2/04f5d2e1a81a9e8a3e1b0521c6ae5086.jpg")
    i2 =Inspo(stylist_id = s2.id, image = "https://i.pinimg.com/474x/07/e9/86/07e986af536912852b557cfb4262388c.jpg")
    i3 = Inspo(stylist_id = s10.id, image = "https://i.pinimg.com/474x/a1/12/b7/a112b747e9664b803fa0d6698d7e4511.jpg")
    i4 = Inspo(stylist_id = s4.id, image = "https://i.pinimg.com/474x/0a/bc/a8/0abca81be15b4fb2f70761d5e6eb0cc4.jpg")
    i5 = Inspo(stylist_id = s13.id, image = "https://i.pinimg.com/474x/79/8d/a1/798da17016a6b610e376c925e113cdbd.jpg")
    i6 = Inspo(stylist_id = s1.id, image = "https://i.pinimg.com/474x/b5/5d/eb/b55deb09e16968974c5958ecf28b3660.jpg")
    i7 = Inspo(stylist_id = s10.id, image= "https://i.pinimg.com/474x/10/f7/ae/10f7aeeef06ce2d55107d19e320835bc.jpg")
    i8 = Inspo(stylist_id = s12.id, image = "https://i.pinimg.com/474x/88/06/17/8806171ae3c0ed85fecb23987b9cdff0.jpg")
    i9 = Inspo(stylist_id = s9.id, image = "https://i.pinimg.com/474x/00/8f/ef/008feff56f241bf574b167bdcefcb9d7.jpg")
    i10 = Inspo(stylist_id = s2.id, image = "https://i.pinimg.com/474x/c6/aa/9c/c6aa9c27b6803a8377d1f51cc4956b66.jpg")
    i11 = Inspo(stylist_id = s6.id, image = "https://i.pinimg.com/474x/e9/37/f6/e937f6fdee2bbbdfae81e7eda34c5b9f.jpg")
    i12 = Inspo(stylist_id = s7.id, image = "https://i.pinimg.com/474x/f0/ca/c7/f0cac7ee093cab46072439456c9456e8.jpg")
    i13 = Inspo(stylist_id = s14.id, image = "https://i.pinimg.com/474x/c4/28/ee/c428ee99ce0162b5e6fb7d07f9ddbaac.jpg")
    i14 = Inspo(stylist_id = s11.id, image = "https://i.pinimg.com/474x/59/77/4a/59774af8f9ab0254b1610ac1657cd0be.jpg")
    i15 = Inspo(stylist_id = s3.id, image = "https://i.pinimg.com/474x/bb/71/88/bb71885b2f65721513131fea6a3bb252.jpg")
    i16 = Inspo(stylist_id = s5.id, image = "https://i.pinimg.com/474x/ed/91/36/ed91363e87b4b307bf8b652b0470a02a.jpg")
    i17 = Inspo(stylist_id = s4.id, image = "https://i.pinimg.com/474x/ee/6a/fc/ee6afc81da3b2e239f4c1df30e7774b5.jpg")
    i18 = Inspo(stylist_id = s15.id, image = "https://i.pinimg.com/474x/0c/7a/37/0c7a375b1f4de65e04219e543cb1ca48.jpg")
    i19 = Inspo(stylist_id = s8.id, image = "https://i.pinimg.com/474x/bb/05/01/bb05014726c313536358918756affe0c.jpg")
    i20 = Inspo(stylist_id = s9.id, image = "https://i.pinimg.com/474x/0d/bb/3a/0dbb3ac0460c1901e6875a3ee538d899.jpg")

    inspos = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20]
    db.session.add_all(inspos)
    db.session.commit()

    print("Seeding done!")  
    db.session.commit()

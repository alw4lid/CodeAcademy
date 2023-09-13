import 'package:flutter/material.dart';

// ignore: must_be_immutable
class MyListTile extends StatelessWidget {
  MyListTile({required this.title, required this.subtitle});

  String title;
  String subtitle;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(title),
      subtitle: Text(subtitle),
      trailing: Icon(Icons.arrow_circle_right_outlined),
      leading: Icon(Icons.access_alarm),
      textColor: Colors.red,
      iconColor: Colors.green,
      // tileColor: Colors.grey[700],
    );
  }
}
